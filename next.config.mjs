/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  api: {
    bodyParser: false, // Disable default Next.js body parsing
  },
};

export default nextConfig;
