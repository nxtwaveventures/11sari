'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-thin mb-4">404</h1>
                    <h2 className="text-2xl font-light mb-8">Page Not Found</h2>
                    <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>

                    <Link href="/">
                        <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                            Return Home
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
} 