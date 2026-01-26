import { NextRequest, NextResponse } from 'next/server';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

export async function POST(request: NextRequest) {
  try {
    const { sectionHtml, sectionStyles, prompt, sectionId } = await request.json();

    // Get API key from environment or request header
    const apiKey = process.env.ANTHROPIC_API_KEY || request.headers.get('x-api-key');

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Set ANTHROPIC_API_KEY in environment or pass via x-api-key header.' },
        { status: 401 }
      );
    }

    const systemPrompt = `You are an expert web designer AI assistant. Your job is to modify website sections based on user requests.

You will receive:
1. The current HTML structure of a section
2. The current Tailwind CSS classes being used
3. A user request for changes

You must respond with a JSON object containing the changes to apply. The response format must be:

{
  "styleOverrides": {
    "selector": "new tailwind classes to add or replace"
  },
  "textChanges": {
    "original text": "new text"
  },
  "cssVariables": {
    "--custom-var": "value"
  },
  "explanation": "Brief explanation of changes made"
}

Rules:
1. Only use valid Tailwind CSS classes
2. For colors, use Tailwind color palette (blue-500, orange-600, etc.)
3. For custom colors, use arbitrary values like bg-[#ff5500]
4. Keep changes minimal and focused on the user's request
5. Preserve the existing structure - only modify styles and text
6. If the request is unclear, make reasonable assumptions

Common Tailwind classes for reference:
- Colors: bg-{color}-{100-900}, text-{color}-{100-900}
- Gradients: bg-gradient-to-{r/l/t/b/br/bl/tr/tl} from-{color} via-{color} to-{color}
- Fonts: text-{xs/sm/base/lg/xl/2xl/3xl/4xl/5xl/6xl} font-{thin/light/normal/medium/semibold/bold/extrabold}
- Spacing: p-{0-12}, m-{0-12}, px-{0-12}, py-{0-12}
- Borders: rounded-{none/sm/md/lg/xl/2xl/3xl/full} border-{0-8}
- Shadows: shadow-{sm/md/lg/xl/2xl}
- Effects: opacity-{0-100}, blur-{sm/md/lg/xl}`;

    const userMessage = `Section ID: ${sectionId}

Current HTML structure:
\`\`\`html
${sectionHtml}
\`\`\`

Current styles/classes visible in the HTML above.

User request: "${prompt}"

Please provide the JSON response with style changes to apply.`;

    const response = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.content[0]?.text || '';

    // Parse the JSON response from Claude
    let changes;
    try {
      // Extract JSON from the response (handle markdown code blocks)
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) ||
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      const jsonStr = jsonMatch[1] || content;
      changes = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      return NextResponse.json(
        { error: 'Failed to parse AI response', rawResponse: content },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      changes,
      sectionId,
    });
  } catch (error) {
    console.error('AI Designer error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
