/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: '.next',
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        unoptimized: true,
        domains: ['localhost'],
    },
    transpilePackages: ['three', 'framer-motion'],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'framer-motion': require.resolve('framer-motion'),
        };
        return config;
    },
    // Remove basePath and assetPrefix for custom domain
    // basePath: process.env.GITHUB_ACTIONS ? '/11sari' : '',
    // assetPrefix: process.env.GITHUB_ACTIONS ? '/11sari/' : '',
};

module.exports = nextConfig; 