/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http://',
  //       hostname: 'localhost',
  //       port: '1337',
  //       pathname: '/uploads/dog_7dcbf3531a.jpg',
  //     },
  //   ],
  // },
  images: {
    domains: ['localhost:3000/ads/2'],
  },
}

module.exports = nextConfig