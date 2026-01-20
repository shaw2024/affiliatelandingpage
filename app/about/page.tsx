import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Affiliate Blog',
  description: 'Learn more about our affiliate blog and how we curate product recommendations',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About This Blog
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our affiliate blog! We're dedicated to sharing honest, curated product 
              recommendations that we discover and share on Facebook stories. Our goal is to help 
              you discover quality books, gadgets, and tools that can improve your life.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 mb-4">
              We repost content from Facebook stories and provide detailed reviews and recommendations 
              for products available on Amazon. Each product we feature is carefully selected and 
              includes our honest opinion and experience.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Curate products from Facebook stories</li>
              <li>Provide honest reviews and recommendations</li>
              <li>Feature Amazon affiliate links for easy purchasing</li>
              <li>Focus on books, productivity tools, and lifestyle products</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Blog</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>Browse our blog posts on the homepage</li>
              <li>Click on posts that interest you to read full reviews</li>
              <li>View the featured Amazon products with each post</li>
              <li>Click "View on Amazon" to purchase products you like</li>
              <li>Check Facebook story links for original content</li>
            </ol>
          </section>
          
          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📢 Affiliate Disclosure</h2>
            <p className="text-gray-700 mb-4">
              This blog participates in the Amazon Associates Program, an affiliate advertising 
              program designed to provide a means for sites to earn advertising fees by advertising 
              and linking to Amazon.com.
            </p>
            <p className="text-gray-700 mb-4">
              When you click on Amazon affiliate links and make a purchase, we may earn a small 
              commission at no additional cost to you. This commission helps support the blog and 
              allows us to continue creating quality content.
            </p>
            <p className="text-gray-700">
              We only recommend products that we genuinely believe in and would recommend regardless 
              of any commission. Your trust is important to us!
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Adding New Posts</h2>
            <p className="text-gray-700 mb-4">
              To add new blog posts, edit the <code className="bg-gray-200 px-2 py-1 rounded">data/blogPosts.ts</code> file 
              and add your new post with the following structure:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`{
  id: 'unique-id',
  title: 'Your Post Title',
  excerpt: 'Brief description',
  content: 'Full content here...',
  date: '2024-01-20',
  facebookStoryUrl: 'https://facebook.com/...',
  amazonProducts: [
    {
      id: 'product-id',
      title: 'Product Name',
      description: 'Product description',
      imageUrl: 'https://...',
      amazonUrl: 'https://amazon.com/...',
      price: '$99.99',
      rating: 4.5
    }
  ],
  tags: ['tag1', 'tag2']
}`}
            </pre>
            <p className="text-gray-700">
              Don't forget to replace <code className="bg-gray-200 px-2 py-1 rounded">youraffiliateID-20</code> in 
              Amazon URLs with your actual Amazon Associates affiliate ID!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
