/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['example.com'],
    },
    webpack: (config) => {
        // Leave this empty for now - we'll use Next.js's built-in module resolution
        return config;
    },
    experimental: {
        esmExternals: 'loose',
    }
}

module.exports = nextConfig 