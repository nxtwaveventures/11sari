import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
    title: "Return & Cancellation Policy – 11Sari.com",
    description: "Our return and cancellation policy for handcrafted sarees at 11Sari.com, including timeframes and exceptions.",
};

export default function ReturnPage() {
    return (
        <LegalContent title="Return & Cancellation Policy">
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-lg text-gray-700">
                            Due to the bespoke nature of handcrafted sarees, we maintain strict return policies:
                        </p>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-50 to-transparent rounded-full opacity-50"></div>
                </div>

                <div className="space-y-6">
                    {/* Timeline component */}
                    <div className="relative">
                        {/* Timeline connector */}
                        <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

                        {/* Cancellation */}
                        <div className="relative pl-16 mb-10">
                            <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 border-2 border-white shadow-md">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Cancellation</h3>
                                <p className="text-gray-700">Allowed within 48 hours after reservation with a full refund.</p>
                            </div>
                        </div>

                        {/* Non-Returnable */}
                        <div className="relative pl-16 mb-10">
                            <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 border-2 border-white shadow-md">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Non-Returnable Items</h3>
                                <p className="text-gray-700">Sarees are non-returnable unless manufacturing defects are verified.</p>
                            </div>
                        </div>

                        {/* Defect Claims */}
                        <div className="relative pl-16 mb-10">
                            <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 border-2 border-white shadow-md">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                                </svg>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Defect Claims</h3>
                                <p className="text-gray-700">Must be raised within 3 days of delivery with photos/videos.</p>
                            </div>
                        </div>

                        {/* Refund Method */}
                        <div className="relative pl-16">
                            <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 border-2 border-white shadow-md">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                                </svg>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Refund Method</h3>
                                <p className="text-gray-700">Refunds (if approved) are processed within 7 working days to the original payment method.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center py-6 px-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl shadow-inner">
                    <p className="text-lg font-medium text-gray-800 italic">Handcrafted pieces deserve handcrafted respect.</p>
                </div>
            </div>
        </LegalContent>
    );
} 