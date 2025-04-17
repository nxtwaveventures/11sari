'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
            <div className="relative">
                {/* Outer ring */}
                <motion.div
                    className="absolute inset-0 border-2 border-amber-500/20 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Inner spinner */}
                <motion.div
                    className="w-16 h-16 border-t-2 border-r-2 border-amber-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Center dot */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-amber-500 rounded-full"
                    initial={{ scale: 0.5, opacity: 0.5 }}
                    animate={{
                        scale: [0.5, 1, 0.5],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Loading text */}
                <motion.p
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-amber-500 text-sm font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.2
                    }}
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
} 