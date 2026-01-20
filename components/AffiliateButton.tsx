'use client'

import { ExternalLink } from 'lucide-react'

interface AffiliateButtonProps {
  url: string
  productName: string
}

export default function AffiliateButton({ url, productName }: AffiliateButtonProps) {
  const handleClick = () => {
    // Track affiliate click (you can integrate analytics here)
    console.log(`Affiliate click: ${productName}`)
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
    >
      Get This Product
      <ExternalLink className="w-4 h-4" />
    </a>
  )
}
