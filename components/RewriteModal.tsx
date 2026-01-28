'use client';

import { useState } from 'react';
import { SocialPost } from '@/lib/types';
import { X, Loader2, Copy, Check, RefreshCw, Send } from 'lucide-react';

interface RewriteModalProps {
  post: SocialPost;
  onClose: () => void;
}

export default function RewriteModal({ post, onClose }: RewriteModalProps) {
  const [rewrittenContent, setRewrittenContent] = useState('');
  const [variations, setVariations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(post.platform);
  const [tone, setTone] = useState<'professional' | 'casual' | 'enthusiastic' | 'informative'>('casual');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [postSuccess, setPostSuccess] = useState(false);

  const handleRewrite = async (generateMultiple = false) => {
    setLoading(true);
    setPostSuccess(false);
    try {
      const response = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: post.content,
          options: {
            tone,
            platform: selectedPlatform,
            includeHashtags,
            includeEmojis,
          },
          generateMultiple,
        }),
      });

      const data = await response.json();
      
      if (generateMultiple && data.variations) {
        setVariations(data.variations);
        setRewrittenContent(data.variations[0] || '');
      } else if (data.rewritten) {
        setRewrittenContent(data.rewritten);
        setVariations([]);
      }
    } catch (error) {
      console.error('Error rewriting:', error);
      alert('Failed to rewrite content. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePost = async () => {
    setPosting(true);
    setPostSuccess(false);
    try {
      const response = await fetch('/api/social/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform: selectedPlatform,
          content: rewrittenContent,
          imageUrl: post.imageUrl,
          videoUrl: post.videoUrl,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setPostSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        alert(data.error || 'Failed to post to social media');
      }
    } catch (error) {
      console.error('Error posting:', error);
      alert('Failed to post to social media. Please check your credentials.');
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">AI Content Rewriter</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Original Content */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Original Content</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Platform
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="casual">Casual</option>
                <option value="professional">Professional</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="informative">Informative</option>
              </select>
            </div>
          </div>

          {/* Toggles */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeHashtags}
                onChange={(e) => setIncludeHashtags(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">Include Hashtags</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeEmojis}
                onChange={(e) => setIncludeEmojis(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">Include Emojis</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleRewrite(false)}
              disabled={loading}
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Rewriting...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  Rewrite with AI
                </>
              )}
            </button>

            <button
              onClick={() => handleRewrite(true)}
              disabled={loading}
              className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:bg-purple-400 transition-colors font-medium"
            >
              Generate 3 Variations
            </button>
          </div>

          {/* Variations Selector */}
          {variations.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Variation
              </label>
              <div className="flex gap-2">
                {variations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setRewrittenContent(variations[index])}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      rewrittenContent === variations[index]
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Variation {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Rewritten Content */}
          {rewrittenContent && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Rewritten Content</h3>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="text-gray-800 whitespace-pre-wrap">{rewrittenContent}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy to Clipboard
                    </>
                  )}
                </button>

                <button
                  onClick={handlePost}
                  disabled={posting || postSuccess}
                  className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {posting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Posting...
                    </>
                  ) : postSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      Posted Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Post to {selectedPlatform}
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> To post directly to social media, you need to configure your API credentials in the .env file. 
              For now, you can copy the rewritten content and post it manually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
