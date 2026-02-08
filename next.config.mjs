/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // If deploying to a subdirectory like username.github.io/repo-name, 
    // set basePath:
    basePath: '/Spline-Contra-Challenge',
};

export default nextConfig;
