'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AIStylistModal from '../../components/AIStylistModal';

export default function StylistPage() {
    const [isStylistModalOpen, setIsStylistModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-800">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-thin mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_0px_20px_rgba(251,191,36,0.3)]">
                            Your Personal AI Stylist
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover the perfect saree for your unique style, body type, and occasion
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Column - Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/images/ai-stylist.png"
                                alt="AI Stylist"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-amber-400 filter blur-xl opacity-30 animate-pulse"></div>
                    </motion.div>

                    {/* Right Column - Info */}
                    <motion.div
                        className="space-y-8 text-gray-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold text-white">How It Works</h2>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                                    <span className="font-semibold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white text-lg">Share Your Preferences</h3>
                                    <p className="text-gray-400">Tell us about your body type, skin tone, and the occasion you're dressing for</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                                    <span className="font-semibold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white text-lg">AI Analysis</h3>
                                    <p className="text-gray-400">Our advanced AI processes your details to find perfect matches from our collection</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                                    <span className="font-semibold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white text-lg">Personalized Recommendations</h3>
                                    <p className="text-gray-400">Receive tailored suggestions with detailed information about each saree</p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            onClick={() => setIsStylistModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Consultation
                        </motion.button>
                    </motion.div>
                </div>

                {/* Testimonials */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-semibold text-white text-center mb-8">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Priya Sharma",
                                text: "The AI stylist helped me find the perfect Kanjivaram for my sister's wedding. The recommendations were spot on!",
                                image: "/images/testimonial1.jpg"
                            },
                            {
                                name: "Kavita Patel",
                                text: "As someone who struggles with fashion choices, this tool was a game-changer. I've never received so many compliments!",
                                image: "/images/testimonial2.jpg"
                            },
                            {
                                name: "Ananya Gupta",
                                text: "The attention to body type and skin tone made all the difference. My new Banarasi saree fits my style perfectly.",
                                image: "/images/testimonial3.jpg"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">{testimonial.name}</h3>
                                        <div className="flex text-amber-400">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Return to Home */}
                <div className="text-center pb-20">
                    <Link href="/">
                        <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>

            {/* Modal */}
            {isStylistModalOpen && (
                <AIStylistModal onClose={() => setIsStylistModalOpen(false)} />
            )}
        </main>
    );
} 