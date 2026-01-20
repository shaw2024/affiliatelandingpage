import { AmazonProduct } from '@/data/types';
import Image from 'next/image';

interface ProductCardProps {
  product: AmazonProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          {product.price && (
            <span className="text-xl font-bold text-green-600">{product.price}</span>
          )}
          {product.rating && (
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-700 font-semibold">{product.rating}</span>
            </div>
          )}
        </div>
        
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-200"
        >
          View on Amazon →
        </a>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
