import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = 'Rambadrinathan/dpgp-website';
const GITHUB_BRANCH = 'staging'; // Always commit to staging

// Map section IDs to their page files
const SECTION_FILE_MAP: Record<string, string> = {
  'home-hero': 'src/app/[lang]/page.tsx',
  'home-stats': 'src/app/[lang]/page.tsx',
  'home-mission': 'src/app/[lang]/page.tsx',
  'home-ministries': 'src/app/[lang]/page.tsx',
  'home-quote': 'src/app/[lang]/page.tsx',
  'home-cta': 'src/app/[lang]/page.tsx',
  'about': 'src/app/[lang]/about/page.tsx',
  'join': 'src/app/[lang]/join/page.tsx',
  'donate': 'src/app/[lang]/donate/page.tsx',
  'ministries': 'src/app/[lang]/ministries/page.tsx',
  'why-now': 'src/app/[lang]/why-now/page.tsx',
};

// Get file content from GitHub
async function getFileFromGitHub(filePath: string): Promise<{ content: string; sha: string }> {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }

  const data = await response.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { content, sha: data.sha };
}

// Commit file to GitHub
async function commitToGitHub(filePath: string, content: string, sha: string, message: string): Promise<void> {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString('base64'),
        sha,
        branch: GITHUB_BRANCH,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to commit: ${error.message || response.statusText}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { sectionId, prompt, mode } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    if (!GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
    }

    // Find the source file for this section
    const filePath = SECTION_FILE_MAP[sectionId.toLowerCase()] || SECTION_FILE_MAP[sectionId];
    if (!filePath) {
      return NextResponse.json({
        error: `Unknown section: ${sectionId}. Available: ${Object.keys(SECTION_FILE_MAP).join(', ')}`
      }, { status: 400 });
    }

    // Get current file from GitHub
    let currentCode: string;
    let fileSha: string;
    try {
      const file = await getFileFromGitHub(filePath);
      currentCode = file.content;
      fileSha = file.sha;
    } catch (error) {
      return NextResponse.json({
        error: `Could not read file from GitHub: ${filePath}`
      }, { status: 404 });
    }

    // Extract section content for context
    const sectionRegex = new RegExp(
      `<ReviewableSection[^>]*sectionId=["']${sectionId}["'][^>]*>([\\s\\S]*?)</ReviewableSection>`,
      'i'
    );
    const sectionMatch = currentCode.match(sectionRegex);
    const sectionContent = sectionMatch ? sectionMatch[1].slice(0, 2000) : '';

    const systemPrompt = `You are an expert React/TypeScript developer editing a Next.js website for DPGP (Dharmic Political Governance Project) - a civic education initiative for West Bengal.

CRITICAL RULES:
1. Return ONLY the complete updated file - no explanations, no markdown code blocks, no \`\`\`
2. Keep ALL imports, exports, and component structure intact
3. Make ONLY the changes requested in the specified section (sectionId: ${sectionId})
4. DO NOT modify other sections
5. Preserve all existing functionality
6. Keep the same coding style (TypeScript, Tailwind CSS, Next.js)
7. The code must be valid TypeScript/TSX that compiles without errors
8. Keep ReviewableSection wrappers intact

You are editing: ${filePath}
Target section: ${sectionId}`;

    const userPrompt = `User request: "${prompt}"

Current file content:
${currentCode}

${sectionContent ? `\nThe section "${sectionId}" currently contains:\n${sectionContent}...\n` : ''}

Return the COMPLETE updated file with the requested changes applied to the "${sectionId}" section:`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 16000,
      messages: [{ role: 'user', content: userPrompt }],
      system: systemPrompt,
    });

    let newCode = message.content[0].type === 'text'
      ? message.content[0].text.trim()
      : '';

    // Clean up any markdown code blocks if AI included them
    if (newCode.startsWith('```')) {
      newCode = newCode.replace(/^```[\w]*\n/, '').replace(/\n```$/, '');
    }

    if (mode === 'apply') {
      // Commit to GitHub
      await commitToGitHub(
        filePath,
        newCode,
        fileSha,
        `AI Edit: ${prompt.slice(0, 50)}${prompt.length > 50 ? '...' : ''}`
      );

      return NextResponse.json({
        success: true,
        message: 'Changes committed to GitHub! Vercel will auto-deploy in ~30 seconds.',
        filePath,
        sectionId,
        applied: true,
      });
    } else {
      // Preview mode - just return the suggestion
      return NextResponse.json({
        success: true,
        suggestion: newCode,
        filePath,
        sectionId,
        applied: false,
      });
    }
  } catch (error) {
    console.error('AI Edit Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate AI suggestion' },
      { status: 500 }
    );
  }
}
