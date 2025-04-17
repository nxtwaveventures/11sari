'use client';

import React, { forwardRef, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = forwardRef(({
    children,
    className = '',
    overlayColor = "from-black/50 to-black/80",
    backgroundOpacity = 0.5,
    backgroundImage = "/images/silk-texture.jpg",
    speed = 0.3
}, ref) => {
    const innerRef = useRef(null);
    const combinedRef = ref || innerRef;

    const { scrollYProgress } = useScroll({
        target: combinedRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section
            ref={combinedRef}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                style={{
                    y,
                    backgroundImage: `url(${backgroundImage})`,
                    opacity: backgroundOpacity
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
            />

            <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor} -z-10`} />

            <motion.div
                className="relative z-10"
                style={{ opacity }}
            >
                {children}
            </motion.div>
        </section>
    );
});

ParallaxSection.displayName = 'ParallaxSection';

export default ParallaxSection; 