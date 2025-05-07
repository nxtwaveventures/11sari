/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/11sari' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/11sari' : '',
    // exportPathMap is not needed with the app router's generateStaticParams
};

module.exports = nextConfig; 