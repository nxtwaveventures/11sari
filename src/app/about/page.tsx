import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary-100 to-secondary-100 py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="gradient-text">Story</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                        Blending tradition with technology to preserve and promote India's handcrafted heritage.
                    </p>
                </div>
            </div>

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
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                At 11Sari, we're on a mission to bridge the gap between traditional craftsmanship and modern technology. We aim to preserve and promote India's rich textile heritage while providing artisans with sustainable livelihoods and customers with authentic, high-quality products.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Through our innovative digital reservation system and blockchain authentication, we're creating transparency and trust in the market for handcrafted sarees, ensuring that each piece's journey—from the weaver's loom to your wardrobe—is documented and verifiable.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">
                                We believe that every saree tells a story, and we're here to make sure that story is heard, valued, and preserved for generations to come.
                            </p>
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

            {/* Our Team */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Meet the <span className="gradient-text">Team</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team member cards would go here */}
                        {/* For now, using placeholders */}
                        {[1, 2, 3].map((member) => (
                            <div key={member} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                                <div className="h-64 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                    <span className="text-lg font-medium text-gray-700">Team Member Photo</span>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Co-Founder & Position</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        A passionate advocate for Indian craftsmanship with a background in textile design and technology.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Our <span className="gradient-text">Journey</span>
                    </h2>

                    <div className="relative">
                        {/* Vertical line for timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>

                        {/* Timeline items */}
                        <div className="space-y-16">
                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                                    <h3 className="text-xl font-semibold mb-2">The Inspiration</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Our journey began with a deep appreciation for India's handloom heritage and a concern for the challenges faced by traditional weavers in the digital age.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                                    <h3 className="text-xl font-semibold mb-2">The Innovation</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        We developed our unique digital reservation system and blockchain authentication to create a bridge between traditional craftsmanship and modern technology.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                                    <h3 className="text-xl font-semibold mb-2">The Impact</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Today, we're proud to support a growing community of artisans while providing our customers with authentic, blockchain-verified handcrafted sarees.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Join Our Journey
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
                        Be part of the movement to preserve and promote India's rich textile heritage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/digital-sarees" className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Explore Our Collection
                        </a>
                        <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
} 