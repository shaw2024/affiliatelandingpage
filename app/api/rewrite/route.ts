import { NextRequest, NextResponse } from 'next/server';
import { rewriteWithClaude, generateVariations, RewriteOptions } from '@/lib/claude';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, options, generateMultiple } = body;

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    if (generateMultiple) {
      const variations = await generateVariations(
        content,
        3,
        options as RewriteOptions
      );
      return NextResponse.json({ variations });
    }

    const rewritten = await rewriteWithClaude(content, options as RewriteOptions);
    return NextResponse.json({ rewritten });
  } catch (error) {
    console.error('Error rewriting content:', error);
    return NextResponse.json(
      { error: 'Failed to rewrite content' },
      { status: 500 }
    );
  }
}
