'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollIndicator = ({ color = 'amber', showLabel = true }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Apply spring physics to scrollYProgress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scrollYProgress to a percentage
    const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [percentage, setPercentage] = useState(0);

    // Update percentage state when scrollPercentage changes
    useEffect(() => {
        const unsubscribe = scrollPercentage.onChange(latest => {
            setPercentage(Math.round(latest));
        });
        return () => unsubscribe();
    }, [scrollPercentage]);

    // Show indicator only after scrolling down a bit
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const colorClasses = {
        amber: 'bg-amber-500',
        purple: 'bg-purple-600',
        blue: 'bg-blue-600',
        pink: 'bg-pink-600',
        emerald: 'bg-emerald-600',
    };

    const bgColorClass = colorClasses[color] || colorClasses.amber;

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-1 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${bgColorClass}`}
            style={{ scaleX, originX: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
        >
            {showLabel && (
                <motion.div
                    className="absolute top-2 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {percentage}%
                </motion.div>
            )}
        </motion.div>
    );
};

export default ScrollIndicator; 