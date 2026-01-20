import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Facebook, Instagram, Twitter, Share2, Clock, ArrowRight } from 'lucide-react'
import type { Post } from '@/lib/posts'

export default function PostCard({ post }: { post: Post }) {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook className="w-4 h-4" />
      case 'instagram':
        return <Instagram className="w-4 h-4" />
      case 'twitter':
        return <Twitter className="w-4 h-4" />
      default:
        return <Share2 className="w-4 h-4" />
    }
  }

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link href={`/post/${post.id}`}>
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium">
            {getSocialIcon(post.socialPlatform)}
            <span>{post.socialPlatform}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Clock className="w-4 h-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Product Count */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {post.affiliateProducts.length} Product{post.affiliateProducts.length !== 1 ? 's' : ''} Featured
            </span>
            <span className="inline-flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
