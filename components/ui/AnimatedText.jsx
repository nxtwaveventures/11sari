'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
    text,
    className = '',
    once = false,
    speed = 0.05,
    threshold = 0.1,
    delay = 0,
    type = 'words' // 'chars', 'words', or 'lines'
}) => {
    // Split text into individual elements for animation
    let elements = [];

    if (type === 'chars') {
        elements = text.split('');
    } else if (type === 'words') {
        elements = text.split(' ').map(word => `${word} `);
    } else if (type === 'lines') {
        elements = text.split('\n');
    }

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay * i
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={`overflow-hidden w-full ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, threshold }}
        >
            <div className="flex flex-wrap">
                {elements.map((element, index) => (
                    <motion.span
                        key={index}
                        className="inline-block will-change-transform"
                        variants={child}
                        style={{
                            display: type === 'lines' ? 'block' : 'inline-block',
                            width: type === 'lines' ? '100%' : 'auto'
                        }}
                    >
                        {element}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default AnimatedText; 