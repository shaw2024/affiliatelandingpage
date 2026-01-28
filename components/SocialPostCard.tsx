'use client';

import { SocialPost } from '@/lib/types';
import { Facebook, Instagram, MessageCircle, Share2, Heart } from 'lucide-react';

interface SocialPostCardProps {
  post: SocialPost;
  onRewrite: (post: SocialPost) => void;
}

export default function SocialPostCard({ post, onRewrite }: SocialPostCardProps) {
  const platformIcons = {
    facebook: Facebook,
    instagram: Instagram,
    tiktok: MessageCircle,
  };

  const platformColors = {
    facebook: 'text-blue-600',
    instagram: 'text-pink-600',
    tiktok: 'text-black',
  };

  const Icon = platformIcons[post.platform];
  const colorClass = platformColors[post.platform];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Platform Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${colorClass}`} />
          <span className="font-semibold capitalize">{post.platform}</span>
        </div>
        <span className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Media */}
      {(post.imageUrl || post.videoUrl) && (
        <div className="relative h-64 bg-gray-100">
          <img
            src={post.imageUrl || post.videoUrl}
            alt="Post media"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4 line-clamp-4">{post.content}</p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">
              {post.author.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-700">{post.author}</span>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{formatNumber(post.likes)}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{formatNumber(post.comments)}</span>
          </div>
          {post.shares > 0 && (
            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              <span>{formatNumber(post.shares)}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onRewrite(post)}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Rewrite with AI
          </button>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
          >
            View Original
          </a>
        </div>
      </div>
    </div>
  );
}
