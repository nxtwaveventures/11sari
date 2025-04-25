'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

// Sample testimonial data
const testimonials = [
    {
        id: 1,
        quote: "The Banarasi silk saree I reserved through 11Sari's blockchain platform is simply exquisite. The craftsmanship is unparalleled, and I love knowing exactly who made my saree.",
        author: "Priya Sharma",
        role: "Fashion Designer",
        location: "Mumbai",
        avatar: "/customer-avatar-1.jpg"
    },
    {
        id: 2,
        quote: "As a saree collector, I appreciate how 11Sari connects me directly with master weavers. The blockchain authentication gives me confidence in the authenticity of each piece I add to my collection.",
        author: "Anita Desai",
        role: "Art Collector",
        location: "Delhi",
        avatar: "/customer-avatar-2.jpg"
    },
    {
        id: 3,
        quote: "The reservation process was smooth and transparent. I love that I can trace the journey of my saree from the loom to my closet. This is the future of luxury textiles.",
        author: "Meera Patel",
        role: "Tech Entrepreneur",
        location: "Bangalore",
        avatar: "/customer-avatar-3.jpg"
    },
    {
        id: 4,
        quote: "My wedding saree from 11Sari became an heirloom the moment I received it. The NFT certificate adds a modern touch to a traditional treasure that I'll pass down through generations.",
        author: "Kavita Reddy",
        role: "Doctor",
        location: "Hyderabad",
        avatar: "/customer-avatar-4.jpg"
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
                    >
                        Customer Experiences
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
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover why saree enthusiasts across India choose our blockchain-authenticated handcrafted sarees.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                    {/* Placeholder for avatar */}
                                    <span className="text-primary-500 font-bold text-lg">
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role}, {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="text-gray-700 dark:text-gray-300 relative pl-6 border-l-2 border-primary-200">
                                <svg
                                    className="absolute text-primary-300 w-8 h-8 opacity-20 top-0 left-0 -translate-x-4 -translate-y-4"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10,8v8H6c0,0,0,2,2,2c2.5,0,2,4,2,4h-4c0,0-4,0-4-4s4-10,4-10H10z M22,8v8h-4c0,0,0,2,2,2c2.5,0,2,4,2,4h-4c0,0-4,0-4-4 s4-10,4-10H22z"></path>
                                </svg>
                                <p>{testimonial.quote}</p>
                            </blockquote>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <button className="btn-primary">
                        Read More Stories
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 