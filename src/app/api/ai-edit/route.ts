import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Map section IDs to their page files
const SECTION_FILE_MAP: Record<string, string> = {
  // Home page sections
  'home-hero': 'src/app/[lang]/page.tsx',
  'home-stats': 'src/app/[lang]/page.tsx',
  'home-mission': 'src/app/[lang]/page.tsx',
  'home-ministries': 'src/app/[lang]/page.tsx',
  'home-quote': 'src/app/[lang]/page.tsx',
  'home-cta': 'src/app/[lang]/page.tsx',
  // Other pages
  'about': 'src/app/[lang]/about/page.tsx',
  'join': 'src/app/[lang]/join/page.tsx',
  'donate': 'src/app/[lang]/donate/page.tsx',
  'ministries': 'src/app/[lang]/ministries/page.tsx',
  'why-now': 'src/app/[lang]/why-now/page.tsx',
};

export async function POST(request: NextRequest) {
  try {
    const { sectionId, prompt, mode } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Find the source file for this section
    const relativeFilePath = SECTION_FILE_MAP[sectionId.toLowerCase()] || SECTION_FILE_MAP[sectionId];
    if (!relativeFilePath) {
      return NextResponse.json({
        error: `Unknown section: ${sectionId}. Available: ${Object.keys(SECTION_FILE_MAP).join(', ')}`
      }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), relativeFilePath);

    // Read current source code
    let currentCode: string;
    try {
      currentCode = await fs.readFile(filePath, 'utf-8');
    } catch {
      return NextResponse.json({
        error: `Could not read file: ${relativeFilePath}`
      }, { status: 404 });
    }

    // Extract the section content using ReviewableSection markers
    const sectionRegex = new RegExp(
      `<ReviewableSection[^>]*sectionId=["']${sectionId}["'][^>]*>([\\s\\S]*?)</ReviewableSection>`,
      'i'
    );
    const sectionMatch = currentCode.match(sectionRegex);

    let sectionContent = '';
    if (sectionMatch) {
      sectionContent = sectionMatch[1];
    }

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

You are editing: ${relativeFilePath}
Target section: ${sectionId}`;

    const userPrompt = `User request: "${prompt}"

Current file content:
${currentCode}

${sectionContent ? `\nThe section "${sectionId}" currently contains:\n${sectionContent.slice(0, 2000)}...\n` : ''}

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
      // Write the changes to the file
      await fs.writeFile(filePath, newCode, 'utf-8');

      return NextResponse.json({
        success: true,
        message: 'Changes applied! Page will refresh automatically.',
        filePath: relativeFilePath,
        sectionId,
        applied: true,
      });
    } else {
      // Preview mode - just return the suggestion
      return NextResponse.json({
        success: true,
        suggestion: newCode,
        filePath: relativeFilePath,
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
