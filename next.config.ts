import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,

  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  serverRuntimeConfig: {
    runtime: 'nodejs',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'img.daisyui.com',
      },
      {
        hostname: 'media.licdn.com',
      },
    ],
  },
};

export default nextConfig;
