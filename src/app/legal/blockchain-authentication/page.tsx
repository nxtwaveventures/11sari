import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Blockchain Authentication – 11Sari.com",
    description: "Learn how we use blockchain technology to authenticate and verify the provenance of each handcrafted saree.",
};

export default function BlockchainAuthenticationPage() {
    return (
        <LegalContent title="Blockchain Authentication">
            <div className="space-y-8">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-xl shadow-md p-8">
                    <div className="relative z-10">
                        <p className="text-lg text-gray-800">
                            Each saree you reserve is immortalized on blockchain technology:
                        </p>
                    </div>

                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 0L95 25V75L50 100L5 75V25L50 0Z" fill="currentColor" className="text-primary-900" />
                            <path d="M50 20L80 35V65L50 80L20 65V35L50 20Z" fill="currentColor" className="text-primary-700" />
                            <path d="M50 40L65 48V63L50 70L35 63V48L50 40Z" fill="currentColor" className="text-primary-500" />
                        </svg>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* NFT Certificates */}
                    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                        <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                        <div className="p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04m-.023 7.032A11.955 11.955 0 0112 21.056a11.955 11.955 0 019.618-5.04m-9.618 5.04a11.955 11.955 0 01-9.618-5.04m9.618 5.04a11.955 11.955 0 019.618-5.04m-9.618-12.08c3.333 7.333 3.333 14.667 0 22m9.618-22c-3.333 7.333-3.333 14.667 0 22"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">NFT Certificates</h3>
                                    <p className="text-gray-700">Every saree comes with a unique NFT minted to your crypto wallet, recording its authenticity.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ownership */}
                    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                        <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                        <div className="p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">Ownership</h3>
                                    <p className="text-gray-700">NFT proves provenance but does not represent a financial investment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technology Partners */}
                    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                        <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                        <div className="p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">Technology Partners</h3>
                                    <p className="text-gray-700">We use Thirdweb to ensure your NFTs are secure, transferable, and verifiable globally.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Privacy */}
                    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                        <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                        <div className="p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">Data Privacy</h3>
                                    <p className="text-gray-700">Your blockchain identity remains decentralized and protected.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Animation */}
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">How Blockchain Authentication Works</h3>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                        <div className="text-center px-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                                </svg>
                            </div>
                            <p className="font-medium text-gray-700">You Reserve a Saree</p>
                        </div>

                        <div className="hidden md:block text-primary-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <div className="text-center px-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04m-.023 7.032A11.955 11.955 0 0112 21.056a11.955 11.955 0 019.618-5.04m-9.618 5.04a11.955 11.955 0 01-9.618-5.04m9.618 5.04a11.955 11.955 0 019.618-5.04m-9.618-12.08c3.333 7.333 3.333 14.667 0 22m9.618-22c-3.333 7.333-3.333 14.667 0 22"></path>
                                </svg>
                            </div>
                            <p className="font-medium text-gray-700">We Mint a Unique NFT</p>
                        </div>

                        <div className="hidden md:block text-primary-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <div className="text-center px-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="font-medium text-gray-700">Permanent Verification</p>
                        </div>
                    </div>
                </div>

                <div className="text-center py-6 px-8 bg-primary-50 rounded-xl shadow-inner">
                    <p className="text-lg font-medium text-gray-800 italic">Tradition meets the future, one weave at a time.</p>
                </div>
            </div>
        </LegalContent>
    );
} 