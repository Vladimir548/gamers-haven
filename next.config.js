/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.igdb.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/igdb/:path*',
        destination: 'https://api.igdb.com/v4/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
