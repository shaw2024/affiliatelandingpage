export interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  author: string;
  authorAvatar?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  url: string;
  category?: string;
}

export interface RewrittenPost {
  originalPost: SocialPost;
  rewrittenContent: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
}
