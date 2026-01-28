/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // For static export (GitHub Pages), comment out the API routes or use a separate build
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // For GitHub Pages deployment - uncomment these and set output: 'export' to deploy statically
  // basePath: process.env.NODE_ENV === 'production' ? '/affiliatelandingpage' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/affiliatelandingpage' : '',
}

module.exports = nextConfig
