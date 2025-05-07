import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Tagline Section */}
            <section className="py-10 bg-gradient-to-r from-pink-100 via-yellow-50 to-yellow-100 text-center flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-700 mb-4 tracking-tight drop-shadow-lg">
                    Design or Reserve. We'll Weave It For You.
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-400 via-pink-400 to-yellow-400 rounded-full mb-4 mx-auto animate-pulse" />
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Image placeholder */}
                        <div className="rounded-xl overflow-hidden h-96">
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                                <span className="text-lg font-medium text-gray-700">Brand Story Image</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Our <span className="gradient-text">Mission</span>
                            </h2>
                            <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-white border border-yellow-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 mb-4">
                                <h3 className="text-2xl font-semibold mb-4 text-primary-600 text-center italic tracking-wide">
                                    Design or Reserve. We'll Weave It For You.
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line text-center font-serif">
                                    At 11Sari, we believe every saree tells a story—
                                    Yours begins with a dream: design your own, reserve a masterpiece, and we'll weave your vision into silk and gold.
                                    Wander through our curated gallery, where tradition meets trend and every drape is a celebration.
                                    And for the seekers of beauty and value, our price tracker unveils hidden gems and dazzling deals from every corner of India—Amazon, Myntra, and beyond.
                                    From bespoke dreams to serendipitous finds, 11Sari is where your saree journey begins, and every thread is woven with care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Our <span className="gradient-text">Values</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We ensure that every saree is genuine, handcrafted by skilled artisans using traditional techniques passed down through generations.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We're committed to ethical practices that support artisan communities and minimize environmental impact throughout our supply chain.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our blockchain technology ensures complete transparency, allowing you to verify the authenticity and journey of each saree.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Join Our Story
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
                        Be part of the movement to preserve and promote India's rich textile heritage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/shop" className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Explore Our Collection
                        </Link>
                        <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
} 