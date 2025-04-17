'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
    title,
    subtitle,
    centered = false,
    className = '',
    titleClassName = '',
    subtitleClassName = '',
    decorative = true
}) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            {decorative && (
                <div className="absolute left-0 top-0 -z-10 opacity-10">
                    <span className="text-7xl font-extrabold uppercase text-primary">
                        {title.slice(0, 1)}
                    </span>
                </div>
            )}

            <motion.h2
                className={`text-3xl md:text-4xl font-bold mb-3 text-gray-900 ${titleClassName}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>

            {decorative && (
                <motion.div
                    className={`h-1 w-24 bg-primary mt-4 rounded ${centered ? 'mx-auto' : ''}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: centered ? 80 : 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                />
            )}

            {subtitle && (
                <motion.p
                    className={`text-lg text-gray-600 max-w-3xl mx-auto ${subtitleClassName}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle; 