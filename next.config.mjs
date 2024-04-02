/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'cdn.buymeacoffee.com',
            port: '',
            pathname: '/**',
        }
      ]
    }
};

export default nextConfig;
