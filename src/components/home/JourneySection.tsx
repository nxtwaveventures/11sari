'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const JourneySection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Journey steps data
    const journeySteps = [
        {
            id: 1,
            title: "The Artisan's Touch",
            description: "Our master weavers spend weeks to months handcrafting each saree using traditional techniques passed down through generations.",
            icon: "✦",
            color: "primary"
        },
        {
            id: 2,
            title: "Blockchain Authentication",
            description: "Each saree is photographed, documented, and registered on blockchain with a unique digital certificate (NFT) proving its authenticity and origin.",
            icon: "✧",
            color: "secondary"
        },
        {
            id: 3,
            title: "Digital Reservation",
            description: "Browse our exclusive collection and reserve your favorite saree with just 30% down payment, securing it with blockchain verification.",
            icon: "✦",
            color: "accent"
        },
        {
            id: 4,
            title: "Artisan to Doorstep",
            description: "Your handcrafted treasure is carefully packaged and delivered directly to your doorstep, accompanied by its digital authentication certificate.",
            icon: "✧",
            color: "primary"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-5 dark:opacity-[0.02]">
                <div className="saree-pattern absolute inset-0"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-secondary-50 text-secondary-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        Our Process
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        From Loom to <span className="gradient-text">Living Room</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
                    >
                        Discover how we merge ancient craftsmanship with modern technology to bring handcrafted heritage to your wardrobe.
                    </motion.p>
                </div>

                {/* Journey Timeline */}
                <div className="relative">
                    {/* Center line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-0 relative">
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <h3 className="text-xl font-bold mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center point */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 items-center justify-center z-10">
                                    <span className={`text-${step.color}-500 text-xl`}>{step.icon}</span>
                                </div>

                                {/* Mobile version of the icon */}
                                <div className="flex md:hidden items-center mb-3">
                                    <div className={`w-10 h-10 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/20 flex items-center justify-center mr-3`}>
                                        <span className={`text-${step.color}-500 text-xl`}>{step.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>

                                {/* Empty div for layout on even items */}
                                <div className="md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <Link href="/about" className="btn-primary">
                        Learn More About Our Process
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection; 