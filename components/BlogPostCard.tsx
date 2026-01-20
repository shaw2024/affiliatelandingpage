import Link from 'next/link';
import { BlogPost } from '@/data/types';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          {post.facebookStoryUrl && (
            <a
              href={post.facebookStoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              📘 View Facebook Story
            </a>
          )}
        </div>
        
        <h2 className="text-2xl font-bold mb-3 text-gray-900">
          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            href={`/blog/${post.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {post.amazonProducts.length} Amazon product{post.amazonProducts.length !== 1 ? 's' : ''} featured
          </p>
        </div>
      </div>
    </article>
  );
}
