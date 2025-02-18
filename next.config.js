/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // Comment this out or remove it
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, 
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
