/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: ['localhost'],
        unoptimized: true,
    },
    transpilePackages: ['three', 'framer-motion'],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'framer-motion': require.resolve('framer-motion'),
        };
        return config;
    },
    basePath: process.env.GITHUB_ACTIONS ? '/11sari' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/11sari/' : '',
};

module.exports = nextConfig; 