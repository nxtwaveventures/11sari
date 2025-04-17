'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({
    type = 'petals', // 'petals', 'bubbles', 'sparkles'
    count = 10,
    colors = ['amber', 'rose', 'purple'],
    opacity = 0.4,
    speed = 1,
    size = 'mixed', // 'small', 'medium', 'large', 'mixed'
    zIndex = 0
}) => {
    const canvasRef = useRef(null);

    // Get Tailwind color values
    const getTailwindColor = (colorName, opacity) => {
        const colorMap = {
            amber: `rgba(245, 158, 11, ${opacity})`,
            rose: `rgba(244, 63, 94, ${opacity})`,
            purple: `rgba(147, 51, 234, ${opacity})`,
            blue: `rgba(59, 130, 246, ${opacity})`,
            emerald: `rgba(16, 185, 129, ${opacity})`,
            pink: `rgba(236, 72, 153, ${opacity})`
        };

        return colorMap[colorName] || colorMap.amber;
    };

    // Generate elements
    const elements = Array(count).fill().map((_, index) => {
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];

        // Random size based on size prop
        let elementSize;
        if (size === 'small') elementSize = Math.random() * 15 + 5;
        else if (size === 'medium') elementSize = Math.random() * 20 + 15;
        else if (size === 'large') elementSize = Math.random() * 25 + 30;
        else elementSize = Math.random() * 30 + 5; // mixed

        return {
            id: index,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: elementSize,
            color: getTailwindColor(selectedColor, Math.random() * 0.3 + opacity),
            duration: (Math.random() * 15 + 20) / speed,
            delay: Math.random() * 5,
            rotate: Math.random() * 360
        };
    });

    // Petal shape SVG path
    const petalPath = "M0,-5 C3,-3 5,0 5,5 C5,10 3,15 0,15 C-3,15 -5,10 -5,5 C-5,0 -3,-3 0,-5 Z";

    // Render different element types
    const renderElement = (element, type) => {
        if (type === 'petals') {
            return (
                <motion.div
                    key={element.id}
                    className="absolute"
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        rotate: element.rotate,
                    }}
                    animate={{
                        y: ['0%', '100%'],
                        rotate: [element.rotate, element.rotate + 360],
                        x: [
                            `${element.x}%`,
                            `${element.x + (Math.random() * 10 - 5)}%`,
                            `${element.x}%`
                        ]
                    }}
                    transition={{
                        duration: element.duration,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: element.delay,
                        times: [0, 1]
                    }}
                >
                    <svg
                        width={element.size}
                        height={element.size * 2}
                        viewBox="-5 -5 10 20"
                        style={{ filter: 'blur(0.5px)' }}
                    >
                        <path d={petalPath} fill={element.color} />
                    </svg>
                </motion.div>
            );
        }

        if (type === 'bubbles') {
            return (
                <motion.div
                    key={element.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        width: element.size,
                        height: element.size,
                        background: element.color,
                        filter: 'blur(0.5px)',
                    }}
                    animate={{
                        y: ['100%', '0%'],
                        scale: [1, 0.8, 1],
                        opacity: [0.7, 1, 0],
                    }}
                    transition={{
                        duration: element.duration,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: element.delay,
                        times: [0, 0.8, 1]
                    }}
                />
            );
        }

        // Default sparkles
        return (
            <motion.div
                key={element.id}
                className="absolute"
                style={{
                    left: `${element.x}%`,
                    top: `${element.y}%`,
                    width: element.size / 3,
                    height: element.size / 3,
                }}
                animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180]
                }}
                transition={{
                    duration: element.duration / 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: element.delay,
                    times: [0, 0.5, 1]
                }}
            >
                <div
                    className="absolute h-full w-[1px] left-1/2 -translate-x-1/2 top-0"
                    style={{ background: element.color }}
                ></div>
                <div
                    className="absolute w-full h-[1px] top-1/2 -translate-y-1/2 left-0"
                    style={{ background: element.color }}
                ></div>
                <div
                    className="absolute h-full w-[1px] left-1/2 -translate-x-1/2 top-0 rotate-45"
                    style={{ background: element.color }}
                ></div>
                <div
                    className="absolute w-full h-[1px] top-1/2 -translate-y-1/2 left-0 rotate-45"
                    style={{ background: element.color }}
                ></div>
            </motion.div>
        );
    };

    return (
        <div
            className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ zIndex }}
        >
            {elements.map(element => renderElement(element, type))}
        </div>
    );
};

export default FloatingElements; 