'use client';

import { useState, useRef, useEffect } from 'react';
import HeroSection from "../components/HeroSection";
import SareeCard3D from "../components/SareeCard3D";
import AIStylistModal from "../components/AIStylistModal";
import MintNFTButton from "../components/MintNFTButton";
import ParallaxSection from "../components/ui/ParallaxSection";
import AnimatedText from "../components/ui/AnimatedText";
import { motion } from 'framer-motion';

export default function Home() {
    const [isStylistModalOpen, setIsStylistModalOpen] = useState(false);
    const featuredSectionRef = useRef(null);

    // Scroll to Featured section when user clicks the down arrow in Hero
    const scrollToFeatured = () => {
        featuredSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HeroSection onScrollDown={scrollToFeatured} />

            <ParallaxSection
                ref={featuredSectionRef}
                className="w-full py-20 px-4 md:px-8"
                overlayColor="from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto">
                    <AnimatedText
                        text="Our Premium Collection"
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                        once={true}
                        speed={0.05}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <SareeCard3D
                                id="1"
                                imageUrl="/images/saree1.jpg"
                                sareeName="Silk Banarasi Saree"
                                weaverName="Padmavati Textiles"
                                price="₹12,999"
                                region="Varanasi, UP"
                                color="hsl(354, 70%, 40%)"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <SareeCard3D
                                id="2"
                                imageUrl="/images/saree2.jpg"
                                sareeName="Embroidered Chiffon Saree"
                                weaverName="Gujarat Handlooms"
                                price="₹8,499"
                                region="Surat, Gujarat"
                                color="hsl(196, 64%, 30%)"
                                isMinted={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <SareeCard3D
                                id="3"
                                imageUrl="/images/saree3.jpg"
                                sareeName="Handloom Cotton Saree"
                                weaverName="Bengal Weavers"
                                price="₹6,999"
                                region="West Bengal"
                                color="hsl(15, 80%, 80%)"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="/collection"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(354,80%,30%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Full Collection
                        </a>
                    </motion.div>
                </div>
            </ParallaxSection>

            <ParallaxSection
                className="w-full py-20 px-4 md:px-8"
                overlayColor="from-[hsl(196,64%,30%)]/80 to-[hsl(354,70%,40%)]/30"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <AnimatedText
                            text="Personal AI Stylist"
                            className="text-3xl md:text-4xl font-bold mb-6 text-white"
                            type="words"
                            once={true}
                        />
                        <AnimatedText
                            text="Not sure which saree suits you best? Our AI stylist can help you find the perfect match based on your preferences, occasion, and style."
                            className="text-lg text-gray-300 mb-8"
                            type="words"
                            speed={0.01}
                            once={true}
                            delay={0.5}
                        />
                        <motion.button
                            onClick={() => setIsStylistModalOpen(true)}
                            className="px-6 py-3 bg-gradient-to-r from-[hsl(15,80%,80%)] to-[hsl(354,70%,40%)] text-white rounded-full hover:shadow-lg hover:shadow-[hsl(354,70%,40%)]/30 transition-all duration-300 transform hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Consult Our AI Stylist
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, margin: "-100px" }}
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
            </ParallaxSection>

            <ParallaxSection
                className="w-full py-20 px-4 md:px-8"
                overlayColor="from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80"
                backgroundOpacity={0.2}
            >
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <AnimatedText
                        text="Own Your Digital Collection"
                        className="text-3xl md:text-4xl font-bold mb-6 text-white"
                        once={true}
                    />
                    <AnimatedText
                        text="Each of our premium sarees comes with a digital certificate of authenticity. Mint your NFT to prove ownership and join our exclusive community."
                        className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                        type="words"
                        speed={0.01}
                        once={true}
                        delay={0.3}
                    />
                    <MintNFTButton />
                </motion.div>
            </ParallaxSection>

            {isStylistModalOpen && (
                <AIStylistModal onClose={() => setIsStylistModalOpen(false)} />
            )}
        </main>
    );
} 