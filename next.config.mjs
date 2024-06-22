/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/events",
        destination: "https://tech-events-argy.vercel.app/api/events",
      },
    ];
  },
};

export default nextConfig;
