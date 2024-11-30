/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  
};

module.exports = nextConfig;