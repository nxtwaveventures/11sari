'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ParallaxSection({
    backgroundImage = '/images/blockchain-bg.jpg',
    children,
    height = '90vh',
    overlayColor = 'rgba(0,0,0,0.6)'
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Create a parallax effect with the background moving slightly slower than the scroll
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacityHeader = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <motion.section
            ref={ref}
            className="relative w-full overflow-hidden"
            style={{
                height,
                minHeight: '500px'
            }}
        >
            {/* Background image with parallax effect */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: backgroundY }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt="Blockchain Technology Background"
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </motion.div>

            {/* Overlay for better text readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: overlayColor,
                    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
                }}
            />

            {/* Content container */}
            <motion.div
                className="relative h-full w-full flex flex-col items-center justify-center px-6 md:px-12 max-w-7xl mx-auto"
                style={{ opacity: opacityHeader, scale }}
            >
                {children}
            </motion.div>

            {/* Scrolling indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ opacity: opacityHeader }}
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </motion.section>
    );
} 