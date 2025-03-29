/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add basePath if you're not using a custom domain
  // basePath: '/your-repo-name',
};

export default nextConfig;