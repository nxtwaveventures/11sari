'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background wave animation */}
            <div className="absolute bottom-0 w-full">
                <div className="w-full h-24 animate-ocean-wave"
                    style={{
                        backgroundImage: 'url(/images/wave.svg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-center mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About SeaLife Sanctuary
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/images/coral.jpg"
                                alt="Coral Reef"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="mb-4">
                                SeaLife Sanctuary is dedicated to the preservation and rehabilitation of marine ecosystems.
                                Founded in 2015, our organization has been at the forefront of ocean conservation efforts.
                            </p>
                            <p>
                                Through education, research, and direct action, we strive to create a world where marine life
                                can thrive for generations to come.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="bg-blue-50 p-8 rounded-lg shadow-md mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center">Our Impact</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <div className="font-bold text-3xl text-blue-600 mb-2">50+</div>
                                <div>Marine Species Protected</div>
                            </div>
                            <div className="p-4">
                                <div className="font-bold text-3xl text-blue-600 mb-2">10,000+</div>
                                <div>Beach Cleanup Volunteers</div>
                            </div>
                            <div className="p-4">
                                <div className="font-bold text-3xl text-blue-600 mb-2">200+</div>
                                <div>Research Publications</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                        <p className="mb-6">
                            Our dedicated team of marine biologists, conservationists, and volunteers work tirelessly
                            to protect marine ecosystems and educate the public about ocean conservation.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { name: 'Dr. Maya Chen', role: 'Marine Biologist', image: '/images/team1.jpg' },
                                { name: 'Carlos Rodriguez', role: 'Conservation Director', image: '/images/team2.jpg' },
                                { name: 'Aisha Johnson', role: 'Education Coordinator', image: '/images/team3.jpg' }
                            ].map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Join Our Cause</h2>
                        <p className="mb-6">
                            Whether you're interested in volunteering, donating, or spreading awareness,
                            there are many ways to get involved with SeaLife Sanctuary.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Get Involved
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 