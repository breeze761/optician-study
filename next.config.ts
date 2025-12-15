import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect vercel.app domain to main domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'optician-study.vercel.app',
          },
        ],
        destination: 'https://opticianstudy.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
