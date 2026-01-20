/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/affiliatelandingpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/affiliatelandingpage' : '',
}

module.exports = nextConfig
