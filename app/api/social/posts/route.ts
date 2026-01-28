import { NextRequest, NextResponse } from 'next/server';
import { getAllPopularPosts } from '@/lib/socialMedia';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const platform = searchParams.get('platform');

    let posts = await getAllPopularPosts();

    // Filter by platform if specified
    if (platform && ['facebook', 'instagram', 'tiktok'].includes(platform)) {
      posts = posts.filter(post => post.platform === platform);
    }

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching social posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social posts' },
      { status: 500 }
    );
  }
}
