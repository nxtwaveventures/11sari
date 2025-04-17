'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from './ui/AnimatedText';

const HeroSection = ({ onScrollDown }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let lastTime = 0;
        const FPS = 30; // Limit FPS for better performance
        const frameDelay = 1000 / FPS;

        // Saree drapery patterns with updated color palette
        const patterns = [];
        const patternCount = 40;

        // Our color palette for flowing fabric patterns
        const colors = [
            'hsl(354, 70%, 40%)',  // Blood red
            'hsl(354, 70%, 50%)',  // Lighter blood red
            'hsl(15, 80%, 80%)',   // Sunset coral
            'hsl(25, 100%, 85%)',  // Sunrise peach
            'hsl(190, 70%, 80%)',  // Light ocean
            'hsl(196, 64%, 30%)',  // Deep ocean
            'hsl(350, 70%, 90%)',  // Pastel pink
        ];

        for (let i = 0; i < patternCount; i++) {
            patterns.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 40, // Reduced size range for less overlap
                speedX: (Math.random() * 0.8 - 0.4) * 0.5, // Slower, more graceful movement
                speedY: (Math.random() * 0.8 - 0.4) * 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.12 + 0.04, // Slightly reduced opacity
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() * 0.004 - 0.002) * 0.8 // Slower rotation
            });
        }

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Recalculate pattern positions on resize
            patterns.forEach(pattern => {
                pattern.x = Math.random() * canvas.width;
                pattern.y = Math.random() * canvas.height;
            });
        };

        const animate = (currentTime) => {
            animationId = requestAnimationFrame(animate);

            // Throttle frame rate
            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameDelay) return;
            lastTime = currentTime - (deltaTime % frameDelay);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            patterns.forEach(pattern => {
                // Only animate patterns in viewport
                if (
                    pattern.x + pattern.size < 0 ||
                    pattern.x - pattern.size > canvas.width ||
                    pattern.y + pattern.size < 0 ||
                    pattern.y - pattern.size > canvas.height
                ) {
                    return;
                }

                ctx.save();
                ctx.translate(pattern.x, pattern.y);
                ctx.rotate(pattern.rotation);
                ctx.globalAlpha = pattern.opacity;

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(
                    pattern.size / 2, -pattern.size / 3,
                    pattern.size, -pattern.size / 6,
                    pattern.size * 1.2, 0
                );
                ctx.bezierCurveTo(
                    pattern.size, pattern.size / 6,
                    pattern.size / 2, pattern.size / 3,
                    0, 0
                );
                ctx.fillStyle = pattern.color;
                ctx.fill();
                ctx.restore();

                pattern.x += pattern.speedX;
                pattern.y += pattern.speedY;
                pattern.rotation += pattern.rotationSpeed;

                // Wrap around edges with smooth transition
                if (pattern.x < -pattern.size * 1.2) {
                    pattern.x = canvas.width + pattern.size;
                    pattern.y = Math.random() * canvas.height;
                }
                if (pattern.x > canvas.width + pattern.size * 1.2) {
                    pattern.x = -pattern.size;
                    pattern.y = Math.random() * canvas.height;
                }
                if (pattern.y < -pattern.size * 1.2) {
                    pattern.y = canvas.height + pattern.size;
                    pattern.x = Math.random() * canvas.width;
                }
                if (pattern.y > canvas.height + pattern.size * 1.2) {
                    pattern.y = -pattern.size;
                    pattern.x = Math.random() * canvas.width;
                }
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background container with improved performance */}
            <div className="fixed inset-0 pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{
                        opacity: 0.8,
                        willChange: 'transform',
                        transform: 'translateZ(0)'
                    }}
                />
                <div
                    className="absolute inset-0 bg-gradient-radial from-black/20 via-black/50 to-black/70"
                    style={{ willChange: 'opacity' }}
                ></div>
            </div>

            {/* Content with improved scroll performance */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 lg:py-24">
                {/* Decorative border with blur effect */}
                <motion.div
                    className="absolute inset-0 -m-6 border border-[hsl(15,80%,80%)]/30 rounded-3xl backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>

                {/* Content with improved spacing */}
                <div className="relative py-10 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10 space-y-8 sm:space-y-10">
                    {/* Main Value Proposition with adjusted spacing */}
                    <motion.div
                        className="mx-auto max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img
                            src="/images/saree-pattern-gold.png"
                            alt="Traditional Indian Saree Pattern"
                            className="h-16 mx-auto mb-8 opacity-80"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <AnimatedText
                            text="Luxury Handcrafted Sarees"
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-thin text-gradient-sunrise drop-shadow-[0_0px_20px_rgba(229,57,53,0.3)]"
                            once={true}
                            type="words"
                        />

                        {/* Price Point & Value with consistent spacing */}
                        <motion.p
                            className="text-xl text-amber-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            Starting from ₹12,999
                        </motion.p>
                    </div>

                    {/* Core Benefits with improved layout */}
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                            className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                        >
                            <motion.div
                                className="flex items-center justify-center gap-3 mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Blockchain Verified Authenticity</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center justify-center gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                            >
                                <svg className="w-6 h-6 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                <span>Virtual Try-On Technology</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* CTAs with consistent spacing */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                            className="relative"
                        >
                            <Link href="/collection">
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full overflow-hidden min-w-[200px] hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                                    <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-amber-600 to-amber-700"></div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <span>Shop Now</span>
                                        <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                            {/* Limited Time Offer with adjusted position */}
                            <motion.div
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.5 }}
                            >
                                <p className="text-xs text-amber-300">Free Shipping on Orders Above ₹25,000</p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                        >
                            <Link href="/stylist">
                                <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full overflow-hidden min-w-[200px] hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                                    <div className="relative flex items-center justify-center gap-2">
                                        <span>Try AI Stylist</span>
                                        <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[15deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Social Proof with proper spacing */}
                    <motion.div
                        className="flex justify-center items-center gap-2 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    >
                        <div className="flex text-amber-400">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.svg
                                    key={i}
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.6 + (i * 0.1) }}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </motion.svg>
                            ))}
                        </div>
                        <motion.span
                            className="text-sm text-gray-300"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 2.1 }}
                        >
                            <span className="font-semibold text-amber-300">4.9/5</span> from 2,500+ customers
                        </motion.span>
                    </motion.div>
                </div>

                {/* Scroll indicator with smooth animation */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
                    onClick={onScrollDown}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
                >
                    <div className="w-14 h-14 relative">
                        <div className="absolute inset-0 border-2 border-[hsl(15,80%,80%)] rounded-full animate-ping opacity-75"></div>
                        <div className="flex items-center justify-center h-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-[hsl(15,80%,80%)] animate-bounce"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 