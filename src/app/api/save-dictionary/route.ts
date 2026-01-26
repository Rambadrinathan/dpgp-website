import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'dpgp2026';

export async function POST(request: NextRequest) {
  try {
    const { password, language, content } = await request.json();

    // Check password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Validate language
    if (!['en', 'hi', 'bn'].includes(language)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }

    // Validate JSON
    try {
      JSON.parse(content);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    // Save file
    const filePath = path.join(process.cwd(), 'src', 'dictionaries', `${language}.json`);
    fs.writeFileSync(filePath, content, 'utf-8');

    return NextResponse.json({ success: true, message: 'Dictionary saved successfully' });
  } catch (error) {
    console.error('Error saving dictionary:', error);
    return NextResponse.json({ error: 'Failed to save dictionary' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language');

    if (!language || !['en', 'hi', 'bn'].includes(language)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'src', 'dictionaries', `${language}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading dictionary:', error);
    return NextResponse.json({ error: 'Failed to read dictionary' }, { status: 500 });
  }
}
