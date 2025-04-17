'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="min-h-screen relative bg-gradient-to-b from-black via-slate-900 to-slate-800 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute bottom-0 w-full h-32 bg-teal-500/10 animate-ocean-wave"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-thin mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_0px_20px_rgba(251,191,36,0.3)]">
                            About Eleven Sari
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        India's first AI-powered, blockchain-backed saree marketplace
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            At Eleven Sari, we're on a mission to revolutionize how sarees are discovered, experienced, and owned.
                            We blend cutting-edge technology with India's rich textile heritage to create a platform that honors
                            artisans while embracing the future.
                        </p>
                        <p className="text-lg text-gray-300">
                            Our AI-driven recommendations, 3D try-on technology, and blockchain authentication ensure an
                            unparalleled experience for saree enthusiasts worldwide, while creating sustainable livelihoods
                            for traditional weavers and craftspeople.
                        </p>
                    </div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-semibold text-white text-center mb-10">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Anamika Sharma",
                                role: "Founder & CEO",
                                bio: "A tech entrepreneur with a passion for traditional textiles and a vision to bring them to the global stage.",
                                image: "/images/team1.jpg"
                            },
                            {
                                name: "Rajiv Patel",
                                role: "CTO",
                                bio: "Blockchain expert and AI enthusiast bringing cutting-edge technology to the traditional saree industry.",
                                image: "/images/team2.jpg"
                            },
                            {
                                name: "Meera Kapoor",
                                role: "Creative Director",
                                bio: "Fashion designer with expertise in traditional textiles, bridging the gap between heritage and innovation.",
                                image: "/images/team3.jpg"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                                <div className="h-48 bg-gradient-to-r from-amber-500/20 to-purple-500/20"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                    <p className="text-amber-400 mb-3">{member.role}</p>
                                    <p className="text-gray-300">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Get Involved Section */}
                <motion.section
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-2xl p-8 border border-amber-500/20">
                        <h2 className="text-3xl font-semibold text-white mb-6">Get Involved</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-medium text-amber-300 mb-3">For Weavers</h3>
                                <p className="text-gray-300 mb-4">
                                    Join our network of skilled artisans. Showcase your creations to a global audience and receive fair compensation for your craftsmanship.
                                </p>
                                <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors">
                                    Apply as a Weaver
                                </button>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-amber-300 mb-3">For Customers</h3>
                                <p className="text-gray-300 mb-4">
                                    Experience the future of saree shopping. Try our AI stylist, explore 3D try-ons, and own digital certificates for your authentic pieces.
                                </p>
                                <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors">
                                    Sign Up for Early Access
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Return to Home */}
                <div className="text-center">
                    <Link href="/">
                        <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
} 