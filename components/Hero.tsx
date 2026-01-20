import { TrendingUp, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-blue-500 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Trending Social Media Finds</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Discover Products from
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Social Media Trends
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto text-balance">
            We curate the best products from viral posts on Facebook, Instagram, Twitter, and more. 
            Shop trending items that everyone's talking about!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#posts"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Browse Products
            </a>
            <a
              href="/admin"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-700/50 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-primary-700/70 transition-all border-2 border-white/20"
            >
              Add Your Find
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-blue-100 text-sm md:text-base">Products Featured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10K+</div>
              <div className="text-blue-100 text-sm md:text-base">Happy Shoppers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">4.9★</div>
              <div className="text-blue-100 text-sm md:text-base">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
