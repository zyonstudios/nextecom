/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devalop.co.uk',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
