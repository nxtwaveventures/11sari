'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white p-4">
            <motion.div
                className="max-w-md w-full mx-auto text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8">
                    <h1 className="text-6xl font-light mb-2">404</h1>
                    <div className="w-20 h-1 bg-[hsl(354,70%,40%)] mx-auto my-6"></div>
                    <h2 className="text-3xl font-serif mb-4">Page Not Found</h2>
                    <p className="text-gray-400 mb-8">
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>
                </div>

                <Link
                    href="/"
                    className="bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(354,80%,30%)] text-white px-6 py-3 rounded-full inline-block hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
} 