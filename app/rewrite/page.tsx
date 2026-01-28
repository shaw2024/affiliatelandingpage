'use client';

import { useState, useEffect } from 'react';
import { SocialPost } from '@/lib/types';
import SocialPostCard from '@/components/SocialPostCard';
import RewriteModal from '@/components/RewriteModal';
import { Facebook, Instagram, MessageCircle, Loader2 } from 'lucide-react';

export default function SocialFeedPage() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [selectedPlatform]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const url = selectedPlatform === 'all' 
        ? '/api/social/posts'
        : `/api/social/posts?platform=${selectedPlatform}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRewrite = (post: SocialPost) => {
    setSelectedPost(post);
  };

  const platforms = [
    { id: 'all', label: 'All Platforms', icon: null },
    { id: 'facebook', label: 'Facebook', icon: Facebook },
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'tiktok', label: 'TikTok', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Social Media Posts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover trending content from Facebook, Instagram, and TikTok. 
            Use AI to rewrite and share on your own channels.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">✨ AI-Powered Content Rewriter</h2>
            <p className="text-indigo-100 mb-4">
              Transform trending social media posts into unique content for your brand. 
              Powered by Claude AI with customizable tones, hashtags, and platform optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>Platform-Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span>Multiple Tones</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>Direct Posting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span>Engagement Sorted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedPlatform === platform.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {platform.label}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
          </div>
        )}

        {/* Posts Grid */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <SocialPostCard
                key={post.id}
                post={post}
                onRewrite={handleRewrite}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No posts found. Try selecting a different platform or check your API configuration.
            </p>
          </div>
        )}
      </div>

      {/* Rewrite Modal */}
      {selectedPost && (
        <RewriteModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}
