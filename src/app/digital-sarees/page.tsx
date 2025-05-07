'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// This would typically come from an API or database
const sareeCategories = [
    { id: 1, name: 'Banarasi Silk', count: 15, image: '/banarasi-placeholder.jpg', description: 'Luxurious silk sarees with intricate gold and silver zari work' },
    { id: 2, name: 'Kanjeevaram', count: 12, image: '/kanjeevaram-placeholder.jpg', description: 'Rich silk sarees with temple-inspired designs' },
    { id: 3, name: 'Chanderi', count: 9, image: '/chanderi-placeholder.jpg', description: 'Lightweight silk-cotton blend with subtle gold motifs' },
    { id: 4, name: 'Patola', count: 7, image: '/patola-placeholder.jpg', description: 'Double ikat silk sarees with geometric patterns' },
    { id: 5, name: 'Pochampally Ikat', count: 11, image: '/pochampally-placeholder.jpg', description: 'Traditional ikat designs in vibrant colors' },
    { id: 6, name: 'Bhagalpuri Silk', count: 8, image: '/bhagalpuri-placeholder.jpg', description: 'Pure silk sarees with traditional motifs' },
    { id: 7, name: 'Tussar Silk', count: 10, image: '/tussar-placeholder.jpg', description: 'Wild silk sarees with natural golden sheen' },
    { id: 8, name: 'Mysore Silk', count: 9, image: '/mysore-placeholder.jpg', description: 'Pure silk sarees with royal heritage' },
    { id: 9, name: 'Baluchari', count: 6, image: '/baluchari-placeholder.jpg', description: 'Silk sarees with narrative motifs' },
    { id: 10, name: 'Bandhani', count: 14, image: '/bandhani-placeholder.jpg', description: 'Tie-dye silk sarees with intricate patterns' },
    { id: 11, name: 'Gadwal', count: 8, image: '/gadwal-placeholder.jpg', description: 'Cotton body with silk border and pallu' },
];

const featuredSarees = [
    {
        id: 1,
        name: 'Royal Banarasi',
        price: 125000,
        image: '/saree-placeholder-1.jpg',
        nftId: '11SARI-2023-0001',
        weaver: 'Master Artisan Rajesh Kumar',
        isReserved: false,
        colors: ['Gold', 'Red', 'Maroon'],
        material: 'Pure Silk'
    },
    {
        id: 2,
        name: 'Temple Kanjeevaram',
        price: 189000,
        image: '/saree-placeholder-2.jpg',
        nftId: '11SARI-2023-0002',
        weaver: 'Master Artisan Lakshmi Devi',
        isReserved: true,
        colors: ['Purple', 'Gold', 'Green'],
        material: 'Pure Silk'
    },
    {
        id: 3,
        name: 'Heritage Chanderi',
        price: 95000,
        image: '/saree-placeholder-3.jpg',
        nftId: '11SARI-2023-0003',
        weaver: 'Master Artisan Mohan Prajapati',
        isReserved: false,
        colors: ['Beige', 'Gold', 'Blue'],
        material: 'Silk Cotton Blend'
    }
];

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Fashion Designer',
        image: '/testimonial-1.jpg',
        quote: 'The quality and craftsmanship of these sarees is exceptional. The blockchain authentication adds a modern touch to traditional elegance.'
    },
    {
        id: 2,
        name: 'Rajesh Patel',
        role: 'Art Collector',
        image: '/testimonial-2.jpg',
        quote: 'As someone who appreciates both traditional art and modern technology, 11Sari perfectly bridges these worlds.'
    },
    {
        id: 3,
        name: 'Ananya Reddy',
        role: 'Cultural Heritage Enthusiast',
        image: '/testimonial-3.jpg',
        quote: 'The reservation process is seamless, and knowing that each saree is authenticated on blockchain gives me peace of mind.'
    }
];

const faqs = [
    {
        question: 'How does the digital reservation work?',
        answer: 'You can reserve a saree by making a 30% down payment. The reservation is recorded as an NFT on the blockchain, ensuring authenticity and ownership.'
    },
    {
        question: 'What is the delivery timeline?',
        answer: 'Once reserved, your handcrafted saree will be delivered within 45-60 days. We ensure each piece meets our high standards of quality.'
    },
    {
        question: 'Can I cancel my reservation?',
        answer: 'Yes, you can cancel your reservation within 48 hours of payment for a full refund. After that, the cancellation policy applies.'
    },
    {
        question: 'How is the blockchain authentication done?',
        answer: 'Each saree comes with a unique NFT certificate of authenticity, minted to your crypto wallet. This ensures the provenance and authenticity of your purchase.'
    }
];

export default function DigitalSarees() {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-primary-100 via-primary-50 to-secondary-100 py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-repeat" style={{
                        backgroundImage: "url('/pattern.svg')",
                        backgroundSize: "40px",
                        transform: "rotate(5deg)"
                    }}></div>
                </div>
                <div className="container mx-auto text-center relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Digital <span className="gradient-text">Saree</span> Reservation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
                    >
                        Browse our exclusive collection of handcrafted sarees, each authenticated on blockchain and available for reservation with a 30% down payment.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center gap-4 flex-wrap"
                    >
                        <button className="btn-primary bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600">
                            All Sarees
                        </button>
                        <button className="btn-secondary bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600">
                            New Arrivals
                        </button>
                        <button className="btn-secondary bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600">
                            Most Popular
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Featured Collection */}
            <div className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Featured <span className="gradient-text">Collection</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredSarees.map((saree) => (
                            <motion.div
                                key={saree.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                        <span className="text-xl font-semibold">{saree.name}</span>
                                    </div>
                                    {saree.isReserved && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
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
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-gray-500">
                                            NFT ID: {saree.nftId}
                                        </span>
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
                                    <h3 className="text-lg font-semibold mb-1">{saree.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        By {saree.weaver}
                                    </p>
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

            {/* Category Sections */}
            <div className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Browse by <span className="gradient-text">Category</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sareeCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/digital-sarees/category/${category.id}`}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block"
                                >
                                    <div className="h-64 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
                                        <span className="text-xl font-semibold">{category.name}</span>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="text-white">
                                            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                                            <p className="text-sm mb-4 text-gray-200">{category.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">{category.count} Sarees Available</span>
                                                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                                                    Explore Collection
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reservation Process */}
            <div className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        How Digital <span className="gradient-text">Reservation</span> Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-md text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-primary-500">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Browse & Select</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore our collections and find the perfect saree that resonates with your style and preference.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-md text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-50 dark:from-secondary-900/20 dark:to-secondary-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-secondary-500">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Reserve with 30%</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Secure your chosen saree by making a 30% down payment. The reservation will be recorded on blockchain as an NFT.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-md text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-900/20 dark:to-accent-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-accent-500">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Delivery & Payment</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Once your saree is ready, we'll deliver it to your doorstep. Complete the remaining payment upon delivery.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        What Our <span className="gradient-text">Customers</span> Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-lg font-semibold text-primary-600">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="py-10 bg-gray-50 dark:bg-gray-800">
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