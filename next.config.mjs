/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // We rely on TypeScript for safety; lint is opt-in via `npm run lint`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
