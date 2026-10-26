/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimized locally (scripts/optimize-images.mjs), so the
  // Next.js / Vercel image optimizer is not used.
  images: { unoptimized: true },

  // Let browsers reuse the pre-optimized images and logos for 30 days instead of
  // revalidating them with the CDN on every visit.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ]
  },

  // Legitimate URLs from the old WordPress site, mapped to the new structure
  // (docs/source-audit/02-page-inventory.md §3). Spam, link-partner and empty
  // pages are deliberately not redirected anywhere.
  async redirects() {
    const map = {
      '/the-sanak-story': '/we-care',
      '/accommodation': '/stay',
      '/accomodation': '/stay',
      '/guest-services-facilities': '/stay',
      '/our-three-bedroom-pool-villa': '/stay/three-bedroom-pool-villa',
      '/one-bedroom-bungalow': '/stay/one-bedroom-bungalow',
      '/our-two-bedroom-bungalows': '/stay/two-bedroom-bungalow',
      '/explore-local': '/experiences',
      '/experience': '/experiences',
      '/trekking': '/experiences',
      '/lake-tour': '/experiences',
      '/spiritual-water-blessing': '/experiences',
      '/mountain-biking': '/experiences',
      '/cooking-class': '/experiences',
      '/motor-bike-tour-buggy-tour': '/experiences',
      '/picnic-at-the-waterfall': '/dining-spa',
      '/chefs-surprise-dinner': '/dining-spa',
      '/romantic-dining': '/dining-spa',
      '/dining': '/dining-spa',
      '/spa-yoga': '/dining-spa',
      '/sanak-deals': '/packages',
      '/deals': '/packages',
      '/made-in-love': '/packages',
      '/sanak-family-package': '/packages',
      '/sanak-explore-and-adventure': '/packages',
      '/sanak-spirit-package': '/packages',
      '/cultured-kids-package': '/packages',
      '/sanak-eco-luxe': '/packages',
      '/made-in-love-2': '/packages',
      '/sanak-family-package-2': '/packages',
      '/sanak-explore-and-adventure-2': '/packages',
      '/sanak-spirit-package-2': '/packages',
      '/cultured-kids-package-2': '/packages',
      '/sanak-eco-luxe-2': '/packages',
      '/get-to-us': '/contact',
      '/when-to-travel': '/contact',
    }
    return Object.entries(map).map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
