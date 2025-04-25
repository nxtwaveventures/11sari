'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Fashion Designer',
        content: 'The Banarasi silk saree I purchased is simply exquisite. The blockchain authentication gave me confidence in its authenticity, and the craftsmanship is unparalleled.',
        avatar: '/avatars/avatar-1.jpg',
        rating: 5,
        location: 'Mumbai'
    },
    {
        id: 2,
        name: 'Ananya Patel',
        role: 'Art Collector',
        content: 'I love that I can trace the entire journey of my saree from the weaver to my wardrobe. The reservation process was smooth, and the quality exceeded my expectations.',
        avatar: '/avatars/avatar-2.jpg',
        rating: 5,
        location: 'Delhi'
    },
    {
        id: 3,
        name: 'Rajesh Mehta',
        role: 'Tech Entrepreneur',
        content: 'Purchased a digital saree as an anniversary gift for my wife. The NFT ownership concept is brilliant, and she loves both the physical saree and its digital authentication.',
        avatar: '/avatars/avatar-3.jpg',
        rating: 4,
        location: 'Bangalore'
    },
    {
        id: 4,
        name: 'Meera Krishnan',
        role: 'Professor',
        content: 'As someone passionate about preserving Indian heritage, I appreciate the transparency 11Sari provides. My Kanjeevaram saree is a masterpiece that tells a story.',
        avatar: '/avatars/avatar-4.jpg',
        rating: 5,
        location: 'Chennai'
    },
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent -z-10 rounded-l-[30%] opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary-50/50 to-transparent -z-10 rounded-r-[30%] opacity-70"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-accent-50 text-accent-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        Customer Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        What Our <span className="gradient-text">Customers</span> Say
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
                    >
                        Hear from those who have experienced the magic of our blockchain-authenticated sarees.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 relative"
                        >
                            {/* Quotation mark */}
                            <div className="absolute top-4 right-4 text-4xl text-primary-100 dark:text-gray-600 font-serif">
                                "
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                "{testimonial.content}"
                            </p>

                            {/* Avatar and user info */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mr-3 flex items-center justify-center text-white font-medium">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                        <span>{testimonial.role}</span>
                                        <span className="mx-1">•</span>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <div className="flex -space-x-2">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 border-2 border-white flex items-center justify-center text-white font-medium">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-primary-500 font-medium">
                                    +
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Join our growing community</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Add your name to our list of satisfied customers and become part of the 11Sari family.
                        </p>
                        <motion.a
                            href="/digital-sarees"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full shadow-md"
                        >
                            Browse Collection
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 