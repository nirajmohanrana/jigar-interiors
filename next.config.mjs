/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.spectruminteriors.co.in",
      },
      {
        protocol: "https",
        hostname: "www.ulcdn.net",
      },
      {
        protocol: "https",
        hostname: "images.livspace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
