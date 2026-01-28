import axios from 'axios';
import { SocialPost } from './types';

/**
 * Facebook Graph API Service
 * Fetches popular posts from a Facebook page
 */
export async function getFacebookPopularPosts(): Promise<SocialPost[]> {
  try {
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const pageId = process.env.FACEBOOK_PAGE_ID;

    if (!accessToken || !pageId) {
      console.warn('Facebook API credentials not configured');
      return getMockFacebookPosts();
    }

    const response = await axios.get(
      `https://graph.facebook.com/v18.0/${pageId}/posts`,
      {
        params: {
          access_token: accessToken,
          fields: 'id,message,created_time,likes.summary(true),comments.summary(true),shares,full_picture,permalink_url,from',
          limit: 10,
        },
      }
    );

    return response.data.data.map((post: any) => ({
      id: post.id,
      platform: 'facebook' as const,
      content: post.message || '',
      imageUrl: post.full_picture,
      author: post.from?.name || 'Facebook User',
      likes: post.likes?.summary?.total_count || 0,
      comments: post.comments?.summary?.total_count || 0,
      shares: post.shares?.count || 0,
      createdAt: post.created_time,
      url: post.permalink_url || '',
    }));
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    return getMockFacebookPosts();
  }
}

/**
 * Instagram Graph API Service
 * Fetches popular posts from an Instagram business account
 */
export async function getInstagramPopularPosts(): Promise<SocialPost[]> {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

    if (!accessToken || !accountId) {
      console.warn('Instagram API credentials not configured');
      return getMockInstagramPosts();
    }

    const response = await axios.get(
      `https://graph.facebook.com/v18.0/${accountId}/media`,
      {
        params: {
          access_token: accessToken,
          fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,username',
          limit: 10,
        },
      }
    );

    return response.data.data.map((post: any) => ({
      id: post.id,
      platform: 'instagram' as const,
      content: post.caption || '',
      imageUrl: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      videoUrl: post.media_type === 'VIDEO' ? post.media_url : undefined,
      author: post.username || 'Instagram User',
      likes: post.like_count || 0,
      comments: post.comments_count || 0,
      shares: 0,
      createdAt: post.timestamp,
      url: post.permalink || '',
    }));
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return getMockInstagramPosts();
  }
}

/**
 * TikTok API Service
 * Fetches popular posts from TikTok
 */
export async function getTikTokPopularPosts(): Promise<SocialPost[]> {
  try {
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

    if (!accessToken) {
      console.warn('TikTok API credentials not configured');
      return getMockTikTokPosts();
    }

    // TikTok API endpoint for fetching videos
    const response = await axios.get(
      'https://open.tiktokapis.com/v2/video/list/',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          fields: 'id,title,video_description,duration,cover_image_url,share_url,create_time,like_count,comment_count,share_count',
          max_count: 10,
        },
      }
    );

    return response.data.data.videos.map((post: any) => ({
      id: post.id,
      platform: 'tiktok' as const,
      content: post.video_description || post.title || '',
      imageUrl: post.cover_image_url,
      videoUrl: post.share_url,
      author: 'TikTok User',
      likes: post.like_count || 0,
      comments: post.comment_count || 0,
      shares: post.share_count || 0,
      createdAt: new Date(post.create_time * 1000).toISOString(),
      url: post.share_url || '',
    }));
  } catch (error) {
    console.error('Error fetching TikTok posts:', error);
    return getMockTikTokPosts();
  }
}

/**
 * Get all popular posts from all platforms
 */
export async function getAllPopularPosts(): Promise<SocialPost[]> {
  const [facebookPosts, instagramPosts, tiktokPosts] = await Promise.all([
    getFacebookPopularPosts(),
    getInstagramPopularPosts(),
    getTikTokPopularPosts(),
  ]);

  const allPosts = [...facebookPosts, ...instagramPosts, ...tiktokPosts];
  
  // Sort by engagement (likes + comments + shares)
  return allPosts.sort((a, b) => {
    const engagementA = a.likes + a.comments + a.shares;
    const engagementB = b.likes + b.comments + b.shares;
    return engagementB - engagementA;
  });
}

// Mock data for development/testing
function getMockFacebookPosts(): SocialPost[] {
  return [
    {
      id: 'fb_1',
      platform: 'facebook',
      content: 'Just discovered this amazing productivity tool! 🚀 It has completely transformed how I work. The AI features are mind-blowing and save me hours every day. Highly recommend checking it out!',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      author: 'Tech Enthusiast',
      likes: 1543,
      comments: 287,
      shares: 156,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      url: 'https://facebook.com/post/1',
    },
    {
      id: 'fb_2',
      platform: 'facebook',
      content: 'This skincare routine changed my life! ✨ After just 2 weeks, my skin is glowing. The secret? Consistency and the right products. Swipe to see my before and after!',
      imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
      author: 'Beauty Guru',
      likes: 2341,
      comments: 412,
      shares: 234,
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      url: 'https://facebook.com/post/2',
    },
  ];
}

function getMockInstagramPosts(): SocialPost[] {
  return [
    {
      id: 'ig_1',
      platform: 'instagram',
      content: 'Morning coffee setup ☕️ Working from home never looked so good! Link in bio for all the details on my desk setup. #WFH #ProductivityGoals',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      author: '@lifestyle_creator',
      likes: 3287,
      comments: 156,
      shares: 0,
      createdAt: new Date(Date.now() - 43200000).toISOString(),
      url: 'https://instagram.com/p/1',
    },
    {
      id: 'ig_2',
      platform: 'instagram',
      content: 'Game changer alert! 🎮 This ergonomic chair has saved my back during long gaming sessions. Worth every penny! #GamerLife #Setup',
      imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      author: '@gamer_pro',
      likes: 4521,
      comments: 298,
      shares: 0,
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      url: 'https://instagram.com/p/2',
    },
  ];
}

function getMockTikTokPosts(): SocialPost[] {
  return [
    {
      id: 'tt_1',
      platform: 'tiktok',
      content: 'POV: You finally found the perfect noise-canceling headphones 🎧 Link in bio! #TechTok #ProductReview',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      author: '@tech_reviewer',
      likes: 15300,
      comments: 543,
      shares: 892,
      createdAt: new Date(Date.now() - 129600000).toISOString(),
      url: 'https://tiktok.com/@user/video/1',
    },
    {
      id: 'tt_2',
      platform: 'tiktok',
      content: 'This $20 Amazon find is a MUST HAVE 😱 I wish I found this sooner! #AmazonFinds #LifeHack',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      author: '@deals_hunter',
      likes: 23400,
      comments: 1203,
      shares: 1567,
      createdAt: new Date(Date.now() - 345600000).toISOString(),
      url: 'https://tiktok.com/@user/video/2',
    },
  ];
}
