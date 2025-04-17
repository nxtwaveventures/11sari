'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({
    children,
    bgImage,
    overlayColor = 'from-black/70 to-black/30',
    speed = 0.5,
    className = '',
    backgroundOpacity = 0.4
}) => {
    const ref = useRef(null);
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const setValues = () => {
            setElementTop(ref.current.offsetTop);
            setClientHeight(window.innerHeight);
        };

        setValues();
        window.addEventListener('resize', setValues);

        return () => window.removeEventListener('resize', setValues);
    }, [ref]);

    const { scrollY } = useScroll();

    const y = useTransform(
        scrollY,
        [elementTop - clientHeight, elementTop + clientHeight],
        [-speed * 100, speed * 100]
    );

    return (
        <section
            ref={ref}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Parallax Background */}
            {bgImage && (
                <motion.div
                    style={{ y, backgroundImage: `url(${bgImage})` }}
                    className="absolute inset-0 bg-cover bg-center"
                    data-testid="parallax-bg"
                >
                    <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor} opacity-${backgroundOpacity * 100}`}></div>
                </motion.div>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>

            {/* Animated Pattern - Flower Petals */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                    >
                        <div
                            className="w-12 h-20 rounded-full bg-amber-300/20"
                            style={{
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection; 