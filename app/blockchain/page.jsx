'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ui/ParallaxSection';
import AnimatedText from '@/components/ui/AnimatedText';
import MintNFTButton from '@/components/MintNFTButton';

export default function BlockchainPage() {
    const [showDetails, setShowDetails] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

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
                                text="Own a Piece of Digital Luxury"
                                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                                type="words"
                                once={true}
                            />
                            <AnimatedText
                                text="Each of our premium sarees is available as a limited edition NFT. Authenticate your physical purchase with blockchain technology and join our exclusive community of digital collectors."
                                className="text-lg text-gray-300 mb-8"
                                type="words"
                                speed={0.01}
                                once={true}
                                delay={0.5}
                            />
                            <MintNFTButton />
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
                                    src="/images/nft-saree.png"
                                    alt="NFT Saree"
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
                        text="Benefits of Saree NFTs"
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                        once={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Authenticity Guaranteed",
                                description: "Blockchain verification ensures your saree's provenance and authenticity.",
                                icon: "🔐"
                            },
                            {
                                title: "Exclusive Community",
                                description: "Join our community of collectors with special access to future releases and events.",
                                icon: "👑"
                            },
                            {
                                title: "Digital + Physical Asset",
                                description: "Own both a stunning physical saree and its digital twin as an investment.",
                                icon: "💎"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-gray-300">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection
                className="w-full py-20 px-4 md:px-8"
                overlayColor="from-[hsl(196,64%,30%)]/80 to-[hsl(354,70%,40%)]/30"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto">
                    <AnimatedText
                        text="How It Works"
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                        once={true}
                    />

                    <div className="space-y-12 max-w-4xl mx-auto">
                        {[
                            {
                                step: "1",
                                title: "Connect Your Wallet",
                                description: "Link a Web3 wallet like MetaMask to get started with the minting process."
                            },
                            {
                                step: "2",
                                title: "Select Your Saree",
                                description: "Choose the saree you want to own as an NFT from our exclusive collection."
                            },
                            {
                                step: "3",
                                title: "Mint Your NFT",
                                description: "Complete the transaction to mint your unique NFT connected to your physical saree."
                            },
                            {
                                step: "4",
                                title: "Receive Your Digital Certificate",
                                description: "Your NFT serves as a digital certificate of ownership and authenticity for your saree."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col md:flex-row items-start gap-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(15,80%,80%)] to-[hsl(354,70%,40%)] flex items-center justify-center text-white font-bold text-xl">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-300">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <motion.button
                            onClick={() => setShowDetails(!showDetails)}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {showDetails ? "Hide Technical Details" : "Show Technical Details"}
                        </motion.button>

                        {showDetails && (
                            <motion.div
                                className="mt-8 bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-left"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Built on Ethereum blockchain (ERC-721 standard)</li>
                                    <li>• Hosted on IPFS for decentralized storage</li>
                                    <li>• Smart contract with royalty mechanisms</li>
                                    <li>• Gas-optimized for affordable minting</li>
                                    <li>• Each NFT includes high-resolution imagery and metadata</li>
                                    <li>• Verifiable on OpenSea and other major marketplaces</li>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </ParallaxSection>
        </main>
    );
} 