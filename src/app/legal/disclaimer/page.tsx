import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
    title: "Legal Disclaimer – 11Sari.com",
    description: "Important disclaimers regarding our services, NFTs, website content, and limitations of liability when using 11Sari.com.",
};

export default function DisclaimerPage() {
    return (
        <LegalContent title="Legal Disclaimer">
            <div className="space-y-8">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
                    <p className="font-medium text-yellow-800 mb-0">Please read carefully:</p>
                </div>

                {/* Disclaimer Cards */}
                <div className="space-y-6">
                    {/* Stylist Services */}
                    <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-primary-600 text-white p-6 flex items-center justify-center md:w-32">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Stylist Services</h3>
                                <p className="text-gray-700">AI Virtual Try-On and suggestions are for styling guidance only, not medical or professional advice.</p>
                            </div>
                        </div>
                    </div>

                    {/* NFT Disclaimer */}
                    <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-primary-600 text-white p-6 flex items-center justify-center md:w-32">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">NFT Disclaimer</h3>
                                <p className="text-gray-700">NFTs provided are certificates of authenticity, not financial assets or securities.</p>
                            </div>
                        </div>
                    </div>

                    {/* Website Content */}
                    <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-primary-600 text-white p-6 flex items-center justify-center md:w-32">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Website Content</h3>
                                <p className="text-gray-700">We strive for accuracy, but slight variations in color, drape, and weave are natural in handcrafted goods.</p>
                            </div>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-primary-600 text-white p-6 flex items-center justify-center md:w-32">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Limitation of Liability</h3>
                                <p className="text-gray-700">11Sari.com is not liable for blockchain platform outages, transaction gas fees, or NFT transfer issues.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Note */}
                <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-inner">
                    <p className="text-lg font-medium italic text-gray-800">
                        Your beauty, your tradition — we only amplify it.
                    </p>
                </div>
            </div>
        </LegalContent>
    );
} 