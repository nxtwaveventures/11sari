import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
    title: "Privacy Policy – 11Sari.com",
    description: "Our privacy policy outlines how we collect, use, and protect your personal data when you use 11Sari.com services.",
};

export default function PrivacyPage() {
    return (
        <LegalContent title="Privacy Policy">
            <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
                    <p className="text-lg font-medium text-gray-800">
                        At 11Sari.com, we value your privacy and are fully compliant with India's Digital Personal Data Protection Act (DPDPA).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-br-full"></div>
                        <div className="relative p-6">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-primary-100 p-2 mr-3">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Data Collection</h3>
                            </div>
                            <p>We collect limited personal data like your name, email, and measurements for services.</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-br-full"></div>
                        <div className="relative p-6">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-primary-100 p-2 mr-3">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Usage</h3>
                            </div>
                            <p>Data is used only to personalize your shopping experience and mint your NFT.</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-br-full"></div>
                        <div className="relative p-6">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-primary-100 p-2 mr-3">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Third-Parties</h3>
                            </div>
                            <p>Services like Firebase, ChatGPT, and Thirdweb may process your data securely.</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary-50 rounded-br-full"></div>
                        <div className="relative p-6">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-primary-100 p-2 mr-3">
                                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
                            </div>
                            <p>You have the right to request deletion or export of your data at any time.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full bg-primary-100 p-2 mr-3">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Cookies</h3>
                    </div>
                    <p>We use cookies to enhance website performance. You can manage preferences anytime.</p>
                </div>

                <div className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">
                    <p className="text-lg font-medium text-gray-800">Trust, security, and love are woven into everything we do.</p>
                </div>
            </div>
        </LegalContent>
    );
} 