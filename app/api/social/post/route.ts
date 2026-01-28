import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

/**
 * Post to Facebook
 */
async function postToFacebook(content: string, imageUrl?: string) {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;

  if (!accessToken || !pageId) {
    throw new Error('Facebook credentials not configured');
  }

  const params: any = {
    message: content,
    access_token: accessToken,
  };

  if (imageUrl) {
    params.url = imageUrl;
    // Use photo endpoint if there's an image
    await axios.post(
      `https://graph.facebook.com/v18.0/${pageId}/photos`,
      params
    );
  } else {
    await axios.post(
      `https://graph.facebook.com/v18.0/${pageId}/feed`,
      params
    );
  }
}

/**
 * Post to Instagram
 */
async function postToInstagram(content: string, imageUrl: string) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    throw new Error('Instagram credentials not configured');
  }

  if (!imageUrl) {
    throw new Error('Instagram posts require an image');
  }

  // Step 1: Create container
  const containerResponse = await axios.post(
    `https://graph.facebook.com/v18.0/${accountId}/media`,
    {
      image_url: imageUrl,
      caption: content,
      access_token: accessToken,
    }
  );

  const containerId = containerResponse.data.id;

  // Step 2: Publish container
  await axios.post(
    `https://graph.facebook.com/v18.0/${accountId}/media_publish`,
    {
      creation_id: containerId,
      access_token: accessToken,
    }
  );
}

/**
 * Post to TikTok
 */
async function postToTikTok(content: string, videoUrl?: string) {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('TikTok credentials not configured');
  }

  // Note: TikTok's API for posting videos is more complex and requires
  // uploading video files. This is a simplified example.
  throw new Error('TikTok posting is not yet implemented. Please use TikTok\'s web interface.');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { platform, content, imageUrl, videoUrl } = body;

    if (!platform || !content) {
      return NextResponse.json(
        { error: 'Platform and content are required' },
        { status: 400 }
      );
    }

    switch (platform) {
      case 'facebook':
        await postToFacebook(content, imageUrl);
        break;
      case 'instagram':
        await postToInstagram(content, imageUrl);
        break;
      case 'tiktok':
        await postToTikTok(content, videoUrl);
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid platform' },
          { status: 400 }
        );
    }

    return NextResponse.json({ 
      success: true,
      message: `Successfully posted to ${platform}` 
    });
  } catch (error: any) {
    console.error('Error posting to social media:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to post to social media' },
      { status: 500 }
    );
  }
}
