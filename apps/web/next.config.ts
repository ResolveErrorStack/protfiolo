import type { NextConfig } from "next";


const nextConfig: NextConfig = {

  /* Enable strict mode */
  reactStrictMode: true,


  /* Image configuration */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },


  /* Experimental features */
  experimental: {
    typedRoutes: true,
  },


  /* Security headers */
  async headers() {

    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],

      },
    ];

  },

};


export default nextConfig;
