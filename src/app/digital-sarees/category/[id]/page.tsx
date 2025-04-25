// @ts-nocheck
import React from 'react';
import Link from 'next/link';

// This would typically come from an API or database
const sareeCategories = [
    { id: 1, name: 'Banarasi Silk', count: 15, image: '/banarasi-placeholder.jpg' },
    { id: 2, name: 'Kanjeevaram', count: 12, image: '/kanjeevaram-placeholder.jpg' },
    { id: 3, name: 'Chanderi', count: 9, image: '/chanderi-placeholder.jpg' },
    { id: 4, name: 'Patola', count: 7, image: '/patola-placeholder.jpg' },
    { id: 5, name: 'Pochampally Ikat', count: 11, image: '/pochampally-placeholder.jpg' },
    { id: 6, name: 'Bhagalpuri Silk', count: 8, image: '/bhagalpuri-placeholder.jpg' },
    { id: 7, name: 'Tussar Silk', count: 10, image: '/tussar-placeholder.jpg' },
    { id: 8, name: 'Mysore Silk', count: 9, image: '/mysore-placeholder.jpg' },
    { id: 9, name: 'Baluchari', count: 6, image: '/baluchari-placeholder.jpg' },
    { id: 10, name: 'Bandhani', count: 14, image: '/bandhani-placeholder.jpg' },
    { id: 11, name: 'Gadwal', count: 8, image: '/gadwal-placeholder.jpg' },
];

// Add generateStaticParams function to pre-render all category pages at build time
export function generateStaticParams() {
    return sareeCategories.map((category) => ({
        id: category.id.toString(),
    }));
}

// Sample saree data for each category
const sampleSarees = [
    {
        id: 101,
        name: 'Traditional Handwoven Saree',
        price: 12500,
        image: '/saree-placeholder-1.jpg',
        nftId: '11SARI-2023-0001',
        weaver: 'Master Artisan Rajesh Kumar',
        isReserved: false,
        colors: ['Gold', 'Red', 'Maroon'],
        material: 'Pure Silk'
    },
    {
        id: 102,
        name: 'Festive Collection Saree',
        price: 18900,
        image: '/saree-placeholder-2.jpg',
        nftId: '11SARI-2023-0002',
        weaver: 'Master Artisan Lakshmi Devi',
        isReserved: true,
        colors: ['Purple', 'Gold', 'Green'],
        material: 'Pure Silk'
    },
    {
        id: 103,
        name: 'Heritage Design Saree',
        price: 9500,
        image: '/saree-placeholder-3.jpg',
        nftId: '11SARI-2023-0003',
        weaver: 'Master Artisan Mohan Prajapati',
        isReserved: false,
        colors: ['Beige', 'Gold', 'Blue'],
        material: 'Silk Cotton Blend'
    },
    {
        id: 104,
        name: 'Premium Handcrafted Saree',
        price: 22500,
        image: '/saree-placeholder-4.jpg',
        nftId: '11SARI-2023-0004',
        weaver: 'Master Artisan Bharat Salvi',
        isReserved: false,
        colors: ['Red', 'Black', 'Gold'],
        material: 'Pure Silk'
    },
    {
        id: 105,
        name: 'Wedding Elegance',
        price: 22000,
        image: '/saree-placeholder-5.jpg',
        nftId: '11SARI-2023-0105',
        weaver: 'Master Artisan Meena Kumari',
        isReserved: false,
        colors: ['Red', 'Gold', 'Pink'],
        material: 'Pure Silk'
    },
    {
        id: 106,
        name: 'Modern Classic',
        price: 13500,
        image: '/saree-placeholder-6.jpg',
        nftId: '11SARI-2023-0106',
        weaver: 'Master Artisan Ramesh Mehta',
        isReserved: true,
        colors: ['Blue', 'Silver', 'White'],
        material: 'Silk Cotton Blend'
    },
];

export default function CategoryPage({ params }) {
    const id = params.id;
    const categoryId = parseInt(id);
    const category = sareeCategories.find(cat => cat.id === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-6">Category Not Found</h1>
                    <p className="mb-8">The category you are looking for does not exist.</p>
                    <Link href="/digital-sarees" className="btn-primary">
                        Back to All Categories
                    </Link>
                </div>
            </div>
        );
    }

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

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {category.name} <span className="gradient-text">Sarees</span>
                        </h1>

                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                            Browse our exclusive collection of handcrafted {category.name} sarees, each authenticated on blockchain and available for reservation.
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                            <span className="font-medium">{category.count} Sarees Available</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-primary-500">4 Recently Reserved</span>
                        </div>
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
                        {sampleSarees.map((saree) => (
                            <div key={saree.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-64 overflow-hidden group">
                                    {/* Placeholder colored div instead of actual image for now */}
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
                                                    <span key={idx} className="sr-only">
                                                        {color}
                                                    </span>
                                                ))}
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
                                        <span className="text-xs text-gray-600 dark:text-gray-300">
                                            By {saree.weaver}
                                        </span>
                                    </div>

                                    <div className="mb-4 flex items-center">
                                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-800 dark:text-gray-300">
                                            {saree.material}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-lg font-bold text-primary-500">
                                            ₹{saree.price.toLocaleString()}
                                        </div>

                                        <button
                                            className={`text-sm px-3 py-1.5 rounded-full ${saree.isReserved
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-primary-500 text-white hover:bg-primary-600'}`}
                                            disabled={saree.isReserved}
                                        >
                                            {saree.isReserved ? 'Reserved' : 'Reserve Now'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="py-8 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <nav className="flex items-center space-x-1">
                            <button className="px-3 py-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>

                            <button className="px-3 py-2 rounded-md bg-primary-500 text-white">1</button>
                            <button className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">2</button>
                            <button className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">3</button>
                            <span className="px-3 py-2 text-gray-400">...</span>
                            <button className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">8</button>

                            <button className="px-3 py-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
} 