'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiShoppingBag, FiHeart, FiEye } from 'react-icons/fi';

// Sample data for trending sarees
const trendingSarees = [
    {
        id: 1,
        name: 'Banarasi Silk Saree',
        category: 'Festive Collection',
        price: 12500,
        image: '/saree-placeholder-1.jpg', // You would replace with actual images
        nftId: '11SARI-2023-0001',
        isReserved: false,
    },
    {
        id: 2,
        name: 'Kanjeevaram Traditional',
        category: 'Wedding Collection',
        price: 18900,
        image: '/saree-placeholder-2.jpg',
        nftId: '11SARI-2023-0002',
        isReserved: true,
    },
    {
        id: 3,
        name: 'Chanderi Silk Cotton',
        category: 'Summer Collection',
        price: 8750,
        image: '/saree-placeholder-3.jpg',
        nftId: '11SARI-2023-0003',
        isReserved: false,
    },
    {
        id: 4,
        name: 'Patola Heritage Weave',
        category: 'Heritage Collection',
        price: 22500,
        image: '/saree-placeholder-4.jpg',
        nftId: '11SARI-2023-0004',
        isReserved: false,
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const TrendingSarees = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Trending <span className="gradient-text">Sarees</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover our most sought-after sarees, each uniquely crafted and authenticated on blockchain.
                    </motion.p>
                </div>

                {/* Saree grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {trendingSarees.map((saree) => (
                        <motion.div
                            key={saree.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="card group"
                        >
                            {/* Product image */}
                            <div className="relative h-80 overflow-hidden rounded-t-2xl">
                                {/* Placeholder colored background instead of actual image for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3">
                                            <span className="text-lg font-semibold">#{saree.id}</span>
                                        </div>
                                        <span className="text-sm bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">{saree.nftId}</span>
                                    </div>
                                </div>

                                {/* NFT badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-md">
                                        NFT Authenticated
                                    </span>
                                </div>

                                {/* Reserved badge */}
                                {saree.isReserved && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-gray-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-md">
                                            Reserved
                                        </span>
                                    </div>
                                )}

                                {/* Quick actions */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-3">
                                        <button className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors">
                                            <FiEye size={18} />
                                        </button>
                                        <button className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors">
                                            <FiHeart size={18} />
                                        </button>
                                        <button className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors">
                                            <FiShoppingBag size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product details */}
                            <div className="p-5">
                                <Link href={`/digital-sarees/${saree.id}`}>
                                    <h3 className="text-lg font-semibold mb-1 hover:text-primary-500 transition-colors">
                                        {saree.name}
                                    </h3>
                                </Link>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    {saree.category}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                                            ₹{saree.price.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            30% Down: ₹{(saree.price * 0.3).toLocaleString()}
                                        </span>
                                    </div>

                                    {!saree.isReserved && (
                                        <Link href={`/digital-sarees/${saree.id}`}>
                                            <button className="btn-primary text-xs px-4 py-2">
                                                Reserve
                                            </button>
                                        </Link>
                                    )}

                                    {saree.isReserved && (
                                        <button className="btn-secondary text-xs px-4 py-2 opacity-50 cursor-not-allowed" disabled>
                                            Reserved
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all button */}
                <div className="text-center mt-12">
                    <Link href="/digital-sarees">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            Explore All Sarees
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingSarees; 