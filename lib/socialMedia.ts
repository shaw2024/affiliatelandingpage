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
      category: 'Technology',
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
      category: 'Beauty',
    },
    {
      id: 'fb_3',
      platform: 'facebook',
      content: '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." John 3:16 ✝️ This verse transformed my life. Share if it blessed you too! #Faith #ChristianLiving #BlessedBeyondMeasure',
      imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800',
      author: 'Faith & Hope',
      likes: 3821,
      comments: 542,
      shares: 687,
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      url: 'https://facebook.com/post/3',
      category: 'Christian',
    },
    {
      id: 'fb_4',
      platform: 'facebook',
      content: 'Started my morning with prayer and everything changed. 🙏 When we seek God first, everything else falls into place. What\'s your morning routine look like? #MorningPrayer #FaithJourney #GodsLove',
      imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800',
      author: 'Grace Community',
      likes: 2198,
      comments: 321,
      shares: 445,
      createdAt: new Date(Date.now() - 432000000).toISOString(),
      url: 'https://facebook.com/post/4',
      category: 'Christian',
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
      category: 'Lifestyle',
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
      category: 'Gaming',
    },
    {
      id: 'ig_3',
      platform: 'instagram',
      content: 'Be still and know that I am God ✨🙏\n\nPsalm 46:10\n\nIn the chaos of life, find peace in His presence. Taking time to be still has changed everything for me.\n\n#ChristianLife #FaithOverFear #PeaceInChrist #BibleVerse #SpiritualGrowth',
      imageUrl: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800',
      author: '@faithful_journey',
      likes: 5632,
      comments: 423,
      shares: 0,
      createdAt: new Date(Date.now() - 518400000).toISOString(),
      url: 'https://instagram.com/p/3',
      category: 'Christian',
    },
    {
      id: 'ig_4',
      platform: 'instagram',
      content: 'Sunday worship hit different today 🎶✝️ There\'s something powerful about praising God with your community. Who else feels closest to God during worship? Drop a 🙌 below!\n\n#SundayService #WorshipMusic #ChurchCommunity #PraiseAndWorship',
      imageUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
      author: '@worshipper',
      likes: 4187,
      comments: 289,
      shares: 0,
      createdAt: new Date(Date.now() - 604800000).toISOString(),
      url: 'https://instagram.com/p/4',
      category: 'Christian',
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
      category: 'Technology',
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
      category: 'Shopping',
    },
    {
      id: 'tt_3',
      platform: 'tiktok',
      content: 'POV: You remember that God\'s got you no matter what 🙏✝️ Watch till the end for the verse that changed my life! #ChristianTikTok #FaithTok #GodsGotYou #BibleVerses',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      author: '@faith_daily',
      likes: 18700,
      comments: 892,
      shares: 1245,
      createdAt: new Date(Date.now() - 691200000).toISOString(),
      url: 'https://tiktok.com/@user/video/3',
      category: 'Christian',
    },
    {
      id: 'tt_4',
      platform: 'tiktok',
      content: 'The moment I gave my worries to God everything shifted 🕊️ Stop trying to control everything and just trust Him! Comment AMEN if you needed this! #ChristianContent #TrustGod #FaithJourney',
      imageUrl: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=800',
      author: '@jesus_follower',
      likes: 27800,
      comments: 1456,
      shares: 2103,
      createdAt: new Date(Date.now() - 777600000).toISOString(),
      url: 'https://tiktok.com/@user/video/4',
      category: 'Christian',
    },
  ];
}
