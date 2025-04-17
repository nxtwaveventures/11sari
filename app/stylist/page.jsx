'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ui/ParallaxSection';
import AnimatedText from '@/components/ui/AnimatedText';
import AIStylistModal from '@/components/AIStylistModal';

export default function StylistPage() {
    const [isStylistModalOpen, setIsStylistModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-black">
            <ParallaxSection
                className="w-full py-24 px-4 md:px-8 min-h-[80vh] flex items-center"
                overlayColor="from-[hsl(196,64%,30%)]/80 to-[hsl(354,70%,40%)]/30"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <AnimatedText
                                text="Your Personal AI Stylist"
                                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                                type="words"
                                once={true}
                            />
                            <AnimatedText
                                text="Finding the perfect saree just got easier. Our AI stylist uses advanced algorithms to recommend the ideal saree based on your preferences, body type, occasion, and style goals."
                                className="text-lg text-gray-300 mb-8"
                                type="words"
                                speed={0.01}
                                once={true}
                                delay={0.5}
                            />
                            <motion.button
                                onClick={() => setIsStylistModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(15,80%,80%)] to-[hsl(354,70%,40%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Styling Session
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2 relative"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="animate-float relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(196,64%,30%)] rounded-lg blur opacity-30"></div>
                                <img
                                    src="/images/ai-stylist.png"
                                    alt="AI Stylist"
                                    className="w-full max-w-md mx-auto rounded-lg shadow-xl relative"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection
                className="w-full py-20 px-4 md:px-8"
                overlayColor="from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto">
                    <AnimatedText
                        text="How It Works"
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                        once={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Share Your Preferences",
                                description: "Tell us about your style, occasion, and preferences to help our AI understand your needs.",
                                icon: "👗"
                            },
                            {
                                title: "Get Personalized Recommendations",
                                description: "Our AI analyzes thousands of sarees to find the perfect matches for you.",
                                icon: "🔍"
                            },
                            {
                                title: "Try Before You Buy",
                                description: "Visualize how the saree might look on you with our virtual try-on feature.",
                                icon: "✨"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            onClick={() => setIsStylistModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-[hsl(15,80%,80%)] to-[hsl(354,70%,40%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Styling Journey
                        </motion.button>
                    </motion.div>
                </div>
            </ParallaxSection>

            {isStylistModalOpen && (
                <AIStylistModal onClose={() => setIsStylistModalOpen(false)} />
            )}
        </main>
    );
} 