/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // For GitHub Pages subdirectory deployment
    basePath: '/Spline-Contra-Challenge',
    assetPrefix: '/Spline-Contra-Challenge/',
};

export default nextConfig;
