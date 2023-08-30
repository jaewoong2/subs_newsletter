/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ywnfqdpcmgtllkshgzsl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/newsletter/image/**',
      },
    ],
  },
}

module.exports = nextConfig
