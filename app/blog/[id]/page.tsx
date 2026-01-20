import { getBlogPost, getAllBlogPosts } from '@/data/blogPosts';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/" 
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Blog
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            {post.facebookStoryUrl && (
              <a
                href={post.facebookStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                📘 View Original Facebook Story
              </a>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none mb-12">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {post.content}
          </div>
        </div>
        
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.amazonProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">💡 Affiliate Disclosure</h3>
          <p className="text-gray-700">
            This post contains Amazon affiliate links. As an Amazon Associate, I earn from qualifying 
            purchases. When you purchase through these links, I may receive a commission at no extra 
            cost to you. Thank you for supporting this blog!
          </p>
        </div>
      </article>
    </div>
  );
}
