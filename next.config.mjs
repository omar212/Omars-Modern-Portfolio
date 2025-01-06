import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Ensure that Next.js knows to look in the src folder for pages
  webpack(config) {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
  // Ensure that Next.js recognizes page extensions and the src/pages folder
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
