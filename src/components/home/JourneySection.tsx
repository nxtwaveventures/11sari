'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle, FiStar, FiShield, FiPackage, FiEdit3 } from 'react-icons/fi';

const journeySteps = [
    {
        id: 1,
        title: 'Weaver Selection',
        description: 'We partner with master weavers across India, selecting only the finest artisans who uphold traditional techniques.',
        icon: <FiStar className="w-6 h-6 text-white" />,
        color: 'from-primary-500 to-primary-600'
    },
    {
        id: 2,
        title: 'Design & Creation',
        description: 'Each saree is meticulously designed and handcrafted, taking 15-45 days depending on the complexity of the weave.',
        icon: <FiEdit3 className="w-6 h-6 text-white" />,
        color: 'from-secondary-500 to-secondary-600'
    },
    {
        id: 3,
        title: 'Blockchain Authentication',
        description: 'The saree is digitally authenticated on the blockchain with a unique NFT that verifies its origin and craftsmanship.',
        icon: <FiShield className="w-6 h-6 text-white" />,
        color: 'from-accent-500 to-accent-600'
    },
    {
        id: 4,
        title: 'Quality Assurance',
        description: 'Our experts meticulously inspect each saree for quality, ensuring it meets our rigorous standards before shipping.',
        icon: <FiCheckCircle className="w-6 h-6 text-white" />,
        color: 'from-gold-500 to-gold-600'
    },
    {
        id: 5,
        title: 'From Loom to Home',
        description: 'Your authenticated saree is carefully packaged and delivered to your doorstep with its digital certificate.',
        icon: <FiPackage className="w-6 h-6 text-white" />,
        color: 'from-primary-500 to-secondary-500'
    }
];

const JourneySection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-gray-50/50 to-transparent opacity-70"></div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-1/4 right-[10%] w-24 h-24 rounded-full bg-primary-100 opacity-30 blur-xl"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-full bg-secondary-100 opacity-40 blur-xl"
                    animate={{
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-gold-50 text-gold-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        The 11Sari Experience
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        From <span className="gradient-text">Weaver</span> to <span className="gradient-text">Wardrobe</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Follow the journey of our sarees from traditional looms to your home, authenticated at every step.
                    </motion.p>
                </div>

                {/* Journey Steps */}
                <div className="relative">
                    {/* Timeline connector */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 hidden md:block"></div>

                    <div className="space-y-12 relative">
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Step icon */}
                                <div className="flex items-center justify-center md:w-1/2">
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>

                                {/* Step content */}
                                <div className="md:w-1/2 text-center md:text-left">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Experience the difference with 11Sari, where every piece tells a story of heritage, craftsmanship, and innovation.
                    </p>

                    <motion.a
                        href="/about"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full shadow-md"
                    >
                        Learn More About Our Process
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default JourneySection; 