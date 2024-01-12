/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakeimg.pl', 'images.igdb.com'],
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
