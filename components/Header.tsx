import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold">📚 Affiliate Blog</span>
          </Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-200 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200 transition-colors font-medium">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <p className="mt-3 text-blue-100">
          Curated recommendations from Facebook stories • Amazon affiliate products
        </p>
      </div>
    </header>
  );
}
