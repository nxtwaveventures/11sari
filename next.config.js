/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        domains: ['example.com'],
        unoptimized: true,
    },
    webpack: (config) => {
        // Leave this empty for now - we'll use Next.js's built-in module resolution
        return config;
    }
}

module.exports = nextConfig 