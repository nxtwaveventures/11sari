'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', text = 'Loading...', color = 'hsl(354, 70%, 40%)' }) => {
    // Size variants
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    // Animation variants for the petals
    const petals = [
        { rotate: 0, delay: 0 },
        { rotate: 45, delay: 0.1 },
        { rotate: 90, delay: 0.2 },
        { rotate: 135, delay: 0.3 },
        { rotate: 180, delay: 0.4 },
        { rotate: 225, delay: 0.5 },
        { rotate: 270, delay: 0.6 },
        { rotate: 315, delay: 0.7 },
    ];

    // Generate a slightly lighter version of the color for gradient
    const lighterColor = color.includes('hsl')
        ? color.replace(/\d+%\)$/, (match) => `${parseInt(match) + 10}%)`)
        : color;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`relative ${sizes[size]}`}>
                {petals.map((petal, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ rotate: petal.rotate }}
                        initial={{ opacity: 0.3, scale: 0.7 }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.7, 1, 0.7]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            delay: petal.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <div
                            style={{
                                height: '33.333%',
                                width: '16.666%',
                                borderRadius: '9999px',
                                background: `linear-gradient(to right, ${color}, ${lighterColor})`,
                                transformOrigin: '50% 150%',
                                filter: `drop-shadow(0 0 2px ${color}88)`
                            }}
                        />
                    </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-1/3 h-1/3 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                </div>
            </div>
            {text && (
                <motion.p
                    style={{ color: lighterColor }}
                    className="mt-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {text}
                </motion.p>
            )}
        </div>
    );
};

export default LoadingSpinner; 