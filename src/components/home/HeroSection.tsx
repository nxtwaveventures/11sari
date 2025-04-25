'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';

const HeroSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sareePatternRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current && sareePatternRef.current) {
            // Animate floating patterns
            gsap.to(sareePatternRef.current, {
                y: -30,
                x: 10,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden min-h-screen flex items-center py-20"
        >
            {/* Background elements */}
            <div
                ref={sareePatternRef}
                className="absolute inset-0 saree-pattern opacity-20 pointer-events-none"
            ></div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-50/50 via-secondary-50/50 to-accent-50/50 -z-10 rounded-bl-[30%]"></div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent -z-10"></div>

            {/* Floating decoration elements */}
            <motion.div
                className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 opacity-60 blur-md"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-secondary-100 to-accent-100 opacity-60 blur-md"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-3 inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-sm"
                        >
                            <span className="text-sm font-medium text-primary-500">Redefining Indian Handlooms</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="gradient-text">Digital Sarees. Handwoven. Blockchain Verified.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Explore our exclusive collection of digitally authenticated sarees, reserved by you, and delivered to your doorstep.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/digital-sarees">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-base px-8 py-3 flex items-center justify-center space-x-2"
                                >
                                    <span>Reserve Now</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </motion.button>
                            </Link>

                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary text-base px-8 py-3"
                                >
                                    Learn More
                                </motion.button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <span className="ml-2 text-sm font-medium">Blockchain Verified</span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                                    </svg>
                                </div>
                                <span className="ml-2 text-sm font-medium">NFT Authenticated</span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                    </svg>
                                </div>
                                <span className="ml-2 text-sm font-medium">Limited Edition</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative h-[500px] w-full">
                            {/* This would be your saree image with NFT token visualization */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-primary-200 via-secondary-100 to-accent-200 flex items-center justify-center">
                                    <div className="text-center p-8 relative z-10">
                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold-500">
                                            <span className="text-2xl font-bold text-gold-700">#001</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Digital Reservation</h3>
                                        <p className="text-sm opacity-90 mb-4">Benarasi Silk Saree with Gold Zari</p>
                                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                            <span className="text-sm font-semibold">NFT ID: SARI-2023-0001</span>
                                        </div>

                                        <div className="mt-6 flex justify-center space-x-3">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                                                View Details
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-primary-500 px-3 py-1 rounded-full text-xs font-medium text-white border border-primary-500">
                                                Reserve Now
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorations */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full opacity-80"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="absolute bottom-12 -left-8 w-16 h-16 bg-gradient-to-br from-accent-300 to-accent-500 rounded-full opacity-70"
                                animate={{
                                    y: [0, 20, 0],
                                    x: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="absolute top-20 left-4 w-12 h-12 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-full opacity-60"
                                animate={{
                                    y: [0, -10, 0],
                                    x: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Authentication Badge */}
                            <motion.div
                                className="absolute -bottom-3 right-10 bg-white py-2 px-4 shadow-lg rounded-xl flex items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-sm font-medium">Authenticated on Blockchain</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 