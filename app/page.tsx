import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'
import Hero from '@/components/Hero'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Finds & Recommendations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated products from trending social media posts, reviewed and recommended just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts yet. Check back soon for amazing product recommendations!
            </p>
          </div>
        )}
      </div>
    </>
  )
}
