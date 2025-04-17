/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
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
    }
};

module.exports = nextConfig; 