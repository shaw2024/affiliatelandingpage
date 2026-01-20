import { getPostById, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { Facebook, Instagram, Twitter, ShoppingCart, ExternalLink, Clock, Share2 } from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)

  if (!post) {
    notFound()
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />
      case 'instagram':
        return <Instagram className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      default:
        return <Share2 className="w-5 h-5" />
    }
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
            {getSocialIcon(post.socialPlatform)}
            <span className="font-medium">{post.socialPlatform}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600">
          {post.excerpt}
        </p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Original Social Media Post Reference */}
      {post.originalUrl && (
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-primary-600" />
            Original Post
          </h3>
          <p className="text-gray-700 mb-3">{post.originalPostText}</p>
          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 transition-colors"
          >
            View on {post.socialPlatform}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="text-gray-700 leading-relaxed space-y-4">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Affiliate Products Section */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600">Get the products mentioned in this post</p>
          </div>
        </div>

        <div className="grid gap-6">
          {post.affiliateProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-3xl font-bold text-primary-600">
                    ${product.price}
                  </div>
                  
                  <AffiliateButton
                    url={product.affiliateUrl}
                    productName={product.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Disclosure:</strong> This post contains affiliate links. If you purchase through these links, 
            we may earn a commission at no extra cost to you. We only recommend products we believe will add value to our readers.
          </p>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          Found this helpful? Share it with your friends!
        </p>
      </div>
    </article>
  )
}
