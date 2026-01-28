import { NextResponse } from 'next/server';
import { getAllPopularPosts } from '@/lib/socialMedia';

export async function GET() {
  try {
    const posts = await getAllPopularPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching social posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social posts' },
      { status: 500 }
    );
  }
}
