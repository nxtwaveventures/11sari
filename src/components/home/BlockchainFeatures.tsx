'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLock, FiDatabase, FiKey, FiShield } from 'react-icons/fi';

const features = [
    {
        icon: <FiDatabase className="w-10 h-10 text-primary-500" />,
        title: 'Blockchain Authentication',
        description: 'Each saree is authenticated on the blockchain with a unique digital signature that cannot be tampered with.',
    },
    {
        icon: <FiKey className="w-10 h-10 text-secondary-500" />,
        title: 'NFT Ownership',
        description: 'Your reservation is secured as a Non-Fungible Token (NFT), providing you with digital proof of ownership.',
    },
    {
        icon: <FiLock className="w-10 h-10 text-accent-500" />,
        title: 'Secure Reservation',
        description: 'Reserve your saree with just 30% down payment, secured by smart contracts on the blockchain.',
    },
    {
        icon: <FiShield className="w-10 h-10 text-gold-500" />,
        title: 'Weaver Verification',
        description: 'Verify the authenticity of your saree and learn about the master weaver who crafted it.',
    },
];

const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const BlockchainFeatures = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-100 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        Revolutionary Technology
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        <span className="gradient-text">Blockchain</span> Authentication
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Our innovative approach combines traditional craftsmanship with cutting-edge blockchain technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={featureVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow relative overflow-hidden group"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex justify-center mb-6">
                                    <motion.div
                                        className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full"
                                        whileHover={{ rotate: 10, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {feature.description}
                                </p>

                                <motion.div
                                    className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                >
                                    <button className="text-primary-500 text-sm font-medium flex items-center justify-center mx-auto">
                                        Learn more
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-6 md:mb-0">
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-full mr-6 shadow-md">
                                <svg
                                    className="w-8 h-8 text-gold-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-1">See How It Works</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Watch our short video explaining our blockchain authentication process
                                </p>
                            </div>
                        </div>

                        <motion.button
                            className="btn-primary text-sm inline-flex items-center gap-2 px-6 py-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Watch Video
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>

                <div className="mt-24 text-center">
                    <motion.a
                        href="/about"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                        <span className="mr-2">Learn more about our authentication process</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default BlockchainFeatures; 