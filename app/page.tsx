import { getAllBlogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

export default function Home() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your Affiliate Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover curated product recommendations from Facebook stories. 
          Find the best books, gadgets, and tools with honest reviews and Amazon affiliate links.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Posts</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
        <h3 className="text-xl font-bold text-gray-900 mb-2">📢 Affiliate Disclosure</h3>
        <p className="text-gray-700">
          This blog contains Amazon affiliate links. When you click on these links and make a purchase, 
          I may earn a small commission at no additional cost to you. This helps support the blog and 
          allows me to continue sharing quality content and recommendations.
        </p>
      </div>
    </div>
  );
}
