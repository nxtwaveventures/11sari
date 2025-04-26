import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Shipping Policy – 11Sari.com",
    description: "Learn about our shipping timelines, charges, and tracking for handcrafted sarees from 11Sari.com.",
};

export default function ShippingPage() {
    return (
        <LegalContent title="Shipping Policy">
            <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-50 via-white to-secondary-50 p-8 shadow-md border border-primary-100">
                    <div className="relative z-10">
                        <p className="text-lg text-gray-800 mb-0">
                            We ensure your handcrafted saree reaches you securely and beautifully.
                        </p>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-50 rounded-full opacity-50"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-50 rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative bg-white rounded-xl shadow-md h-full overflow-hidden group hover:shadow-lg transition-shadow">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Delivery Timeline</h3>
                                </div>
                                <p className="mb-0">Reserved sarees are delivered within 45–60 days post full payment confirmation.</p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-50 rounded-tl-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="relative bg-white rounded-xl shadow-md h-full overflow-hidden group hover:shadow-lg transition-shadow">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                        </svg>
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Tracking</h3>
                                </div>
                                <p className="mb-0">You will receive a live tracking link once your saree is dispatched.</p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-50 rounded-tl-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative p-6">
                        <div className="flex items-center mb-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mr-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                            </span>
                            <h3 className="text-xl font-bold text-gray-800">Shipping Charges</h3>
                        </div>

                        <div className="space-y-3 pl-14">
                            <div className="flex items-center">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-50 text-primary-600 mr-2 text-xs font-medium">IN</span>
                                <p className="mb-0"><strong>India:</strong> Free standard shipping.</p>
                            </div>

                            <div className="flex items-center">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-50 text-primary-600 mr-2 text-xs font-medium">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0"><strong>International:</strong> Additional charges based on destination country (visible at checkout).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-inner">
                    <p className="text-lg font-medium text-gray-800 italic">Every saree carries not just fabric — but centuries of tradition.</p>
                </div>
            </div>
        </LegalContent>
    );
} 