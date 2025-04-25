'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        <span className="gradient-text">Blockchain</span> Authentication
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
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
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-full">
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
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-semibold mb-1">See How It Works</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    Watch our short video explaining our blockchain authentication process
                                </p>
                                <button className="btn-primary text-sm inline-flex items-center gap-2">
                                    Watch Video
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainFeatures; 