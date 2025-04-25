'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FiShoppingBag, FiHeart, FiEye, FiArrowRight } from 'react-icons/fi';

// Sample data for trending sarees
const trendingSarees = [
    {
        id: 1,
        name: 'Banarasi Silk Saree',
        category: 'Festive Collection',
        price: 12500,
        image: '/saree-placeholder-1.jpg', // You would replace with actual images
        nftId: '11SARI-2023-0001',
        weaver: 'Master Artisan Rajesh Kumar',
        region: 'Varanasi, Uttar Pradesh',
        isReserved: false,
        colors: ['Gold', 'Red', 'Maroon'],
        material: 'Pure Silk'
    },
    {
        id: 2,
        name: 'Kanjeevaram Traditional',
        category: 'Wedding Collection',
        price: 18900,
        image: '/saree-placeholder-2.jpg',
        nftId: '11SARI-2023-0002',
        weaver: 'Master Artisan Lakshmi Devi',
        region: 'Kanchipuram, Tamil Nadu',
        isReserved: true,
        colors: ['Purple', 'Gold', 'Green'],
        material: 'Pure Silk'
    },
    {
        id: 3,
        name: 'Chanderi Silk Cotton',
        category: 'Summer Collection',
        price: 8750,
        image: '/saree-placeholder-3.jpg',
        nftId: '11SARI-2023-0003',
        weaver: 'Master Artisan Mohanlal Prajapati',
        region: 'Chanderi, Madhya Pradesh',
        isReserved: false,
        colors: ['Beige', 'Gold', 'Light Blue'],
        material: 'Silk Cotton Blend'
    },
    {
        id: 4,
        name: 'Patola Heritage Weave',
        category: 'Heritage Collection',
        price: 22500,
        image: '/saree-placeholder-4.jpg',
        nftId: '11SARI-2023-0004',
        weaver: 'Master Artisan Bharat Salvi',
        region: 'Patan, Gujarat',
        isReserved: false,
        colors: ['Red', 'Black', 'Gold'],
        material: 'Pure Silk'
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
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-secondary-50 text-secondary-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        Handcrafted Exclusives
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Trending <span className="gradient-text">Sarees</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover our most sought-after sarees, each uniquely crafted and authenticated on blockchain.
                    </motion.p>
                </div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium">All Collections</button>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Festive</button>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Wedding</button>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Summer</button>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">Heritage</button>
                </motion.div>

                {/* Saree grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {trendingSarees.map((saree) => (
                        <motion.div
                            key={saree.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
                        >
                            {/* Product image */}
                            <div className="relative h-80 overflow-hidden">
                                {/* Placeholder colored background instead of actual image for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out">
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
                                        <motion.button
                                            className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiEye size={18} />
                                        </motion.button>
                                        <motion.button
                                            className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiHeart size={18} />
                                        </motion.button>
                                        <motion.button
                                            className="bg-white rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiShoppingBag size={18} />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            {/* Product details */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{saree.category}</span>
                                    <div className="flex">
                                        {saree.colors.map((color, idx) => (
                                            <span
                                                key={idx}
                                                className="sr-only"
                                                aria-label={`Color: ${color}`}
                                            >
                                                {color}
                                            </span>
                                        ))}
                                        <div className="flex -space-x-1">
                                            <div className="w-4 h-4 rounded-full border border-white bg-red-500"></div>
                                            <div className="w-4 h-4 rounded-full border border-white bg-yellow-500"></div>
                                            <div className="w-4 h-4 rounded-full border border-white bg-purple-500"></div>
                                        </div>
                                    </div>
                                </div>

                                <Link href={`/digital-sarees/${saree.id}`}>
                                    <h3 className="text-lg font-semibold mb-1 hover:text-primary-500 transition-colors">
                                        {saree.name}
                                    </h3>
                                </Link>

                                <div className="flex items-center mb-2">
                                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-300">
                                        {saree.region}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center">
                                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-800 dark:text-gray-300">
                                        {saree.material}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                                            ₹{saree.price.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-primary-500 font-medium">
                                            30% Down: ₹{(saree.price * 0.3).toLocaleString()}
                                        </span>
                                    </div>

                                    {!saree.isReserved ? (
                                        <Link href={`/digital-sarees/${saree.id}`}>
                                            <motion.button
                                                className="btn-primary text-xs px-4 py-2 flex items-center gap-1"
                                                whileHover={{ gap: '0.5rem' }}
                                            >
                                                Reserve
                                                <FiArrowRight />
                                            </motion.button>
                                        </Link>
                                    ) : (
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
                <div className="text-center mt-16">
                    <Link href="/digital-sarees">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary inline-flex items-center gap-2 px-6 py-3"
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