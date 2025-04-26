'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Category {
    id: number;
    name: string;
    count: number;
    image: string;
    description: string;
}

interface Saree {
    id: number;
    name: string;
    price: number;
    image: string;
    nftId: string;
    weaver: string;
    isReserved: boolean;
    colors: string[];
    material: string;
}

interface CategoryContentProps {
    category: Category;
    sarees: Saree[];
}

export default function CategoryContent({ category, sarees }: CategoryContentProps) {
    return (
        <div className="min-h-screen">
            {/* Category Header */}
            <div className="relative bg-gradient-to-r from-primary-100 to-secondary-100 py-16 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <Link
                            href="/digital-sarees"
                            className="text-primary-500 hover:text-primary-600 flex items-center mb-4"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Back to Categories
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            {category.name} <span className="gradient-text">Sarees</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
                        >
                            Browse our exclusive collection of handcrafted {category.name} sarees, each authenticated on blockchain and available for reservation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center justify-center gap-2 text-sm bg-white px-4 py-2 rounded-full shadow-sm"
                        >
                            <span className="font-medium">{category.count} Sarees Available</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-primary-500">4 Recently Reserved</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Saree Filters */}
            <div className="bg-white dark:bg-gray-900 py-6 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-4 py-2.5 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <option value="">Sort by: Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="popularity">Popularity</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="relative">
                                <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-4 py-2.5 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <option value="">Filter by: Material</option>
                                    <option value="pure-silk">Pure Silk</option>
                                    <option value="cotton-silk">Cotton Silk</option>
                                    <option value="linen">Linen</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Show:</span>
                            <button className="bg-primary-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
                                <span>12</span>
                            </button>
                            <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-200">
                                <span>24</span>
                            </button>
                            <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-200">
                                <span>36</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Saree Listings */}
            <div className="py-12 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {sarees.map((saree) => (
                            <motion.div
                                key={saree.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-64 overflow-hidden group">
                                    <div className="h-full bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                        <span className="text-xl font-semibold">{saree.name}</span>
                                    </div>

                                    {saree.isReserved && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                            Reserved
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Link
                                            href={`/digital-sarees/${saree.id}`}
                                            className="bg-white text-primary-500 px-4 py-2 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                            NFT ID: {saree.nftId}
                                        </span>
                                        <div className="flex">
                                            <div className="flex -space-x-1">
                                                {saree.colors.map((color, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="w-4 h-4 rounded-full border border-white"
                                                        style={{ backgroundColor: color.toLowerCase() }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <Link href={`/digital-sarees/${saree.id}`}>
                                        <h3 className="text-lg font-semibold mb-1 hover:text-primary-500 transition-colors">
                                            {saree.name}
                                        </h3>
                                    </Link>

                                    <div className="flex items-center mb-2">
                                        <span className="text-xs text-gray-600 dark:text-gray-300">
                                            By {saree.weaver}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary-600">
                                            ₹{saree.price.toLocaleString()}
                                        </span>
                                        <button className="btn-primary text-sm">
                                            Reserve Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 