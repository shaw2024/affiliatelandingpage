import { Heart, TrendingUp, Shield, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About AffiliateBlog
        </h1>
        <p className="text-xl text-gray-600">
          Connecting you with the best products from social media trends
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-gray-700 leading-relaxed">
          Welcome to AffiliateBlog! We&apos;re passionate about discovering and sharing amazing products 
          that are taking social media by storm. Our mission is to help you find high-quality products 
          that real people love and recommend.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Every day, millions of people share their favorite finds on platforms like Facebook, Instagram, 
          Twitter, and TikTok. We curate the best of these discoveries, test them ourselves, and share 
          honest reviews to help you make informed purchasing decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Trending Products</h3>
          <p className="text-gray-600">
            We track viral products across all major social platforms to bring you what's hot right now.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Honest Reviews</h3>
          <p className="text-gray-600">
            We only recommend products we genuinely believe will add value to your life.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent</h3>
          <p className="text-gray-600">
            We clearly disclose all affiliate relationships and earn commissions through qualifying purchases.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
          <p className="text-gray-600">
            Our recommendations come from real social media posts and community feedback.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h2>
        <p className="text-gray-700 leading-relaxed">
          AffiliateBlog is a participant in various affiliate marketing programs, which means we may earn 
          commissions on purchases made through our links. This comes at no extra cost to you and helps us 
          keep the site running and continue providing valuable content. We only recommend products that we 
          believe will genuinely benefit our readers.
        </p>
      </div>
    </div>
  )
}
