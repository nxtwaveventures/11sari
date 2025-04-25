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

export default function DigitalSarees() {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-primary-100 to-secondary-100 py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Digital <span className="gradient-text">Saree</span> Reservation
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                        Browse our exclusive collection of handcrafted sarees, each authenticated on blockchain and available for reservation with a 30% down payment.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="btn-primary">
                            All Sarees
                        </button>
                        <button className="btn-secondary">
                            New Arrivals
                        </button>
                        <button className="btn-secondary">
                            Most Popular
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Sections */}
            <div className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Browse by <span className="gradient-text">Category</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sareeCategories.map((category) => (
                            <Link
                                href={`/digital-sarees/category/${category.id}`}
                                key={category.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Placeholder colored div instead of actual image for now */}
                                <div className="h-64 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                    <span className="text-xl font-semibold">{category.name}</span>
                                </div>

                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                                        <p className="text-sm mb-4">{category.count} Sarees Available</p>
                                        <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                                            Explore Collection
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reservation Process */}
            <div className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        How Digital <span className="gradient-text">Reservation</span> Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-primary-500">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Browse & Select</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore our collections and find the perfect saree that resonates with your style and preference.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-secondary-500">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Reserve with 30%</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Secure your chosen saree by making a 30% down payment. The reservation will be recorded on blockchain as an NFT.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-accent-500">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Delivery & Payment</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Once your saree is ready, we'll deliver it to your doorstep. Complete the remaining payment upon delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="py-10 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10 text-primary-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span className="text-sm font-medium">100% Secure Payments</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10 text-primary-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            <span className="text-sm font-medium">Blockchain Verified</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10 text-primary-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            <span className="text-sm font-medium">Free Shipping in India</span>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <svg className="w-10 h-10 text-primary-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                            </svg>
                            <span className="text-sm font-medium">Handcrafted with Love</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 