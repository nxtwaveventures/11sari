/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    basePath: process.env.NODE_ENV === 'production' ? '' : '/11sari',
};

module.exports = nextConfig; 