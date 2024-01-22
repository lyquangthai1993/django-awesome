/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jetbrains.com',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },

    ],
  },
};

export default nextConfig;
