export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">About This Blog</h3>
            <p className="text-sm">
              We curate the best products and share insights from Facebook stories, 
              helping you discover quality books, tools, and products through Amazon affiliate links.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Disclosure</h3>
            <p className="text-sm">
              This website contains Amazon affiliate links. As an Amazon Associate, 
              I earn from qualifying purchases at no additional cost to you.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  📘 Facebook
                </a>
              </li>
              <li>
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  🛒 Amazon Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Affiliate Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
