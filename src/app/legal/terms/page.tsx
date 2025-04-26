import { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
    title: "Terms & Conditions – 11Sari.com",
    description: "Read our terms and conditions for using 11Sari.com, including reservations, NFT authentication, payments, cancellations, and governing law.",
};

export default function TermsPage() {
    return (
        <LegalContent title="Terms & Conditions">
            <div className="space-y-6">
                <p className="lead text-lg text-gray-700">
                    Welcome to 11Sari.com. By accessing or using our services, you agree to abide by the following Terms & Conditions:
                </p>

                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                    <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17L4 12"></path>
                                </svg>
                            </span>
                            Reservations
                        </h3>
                        <p>A 30% advance reserves your handcrafted saree. The balance is payable before dispatch.</p>
                    </div>

                    <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04m-.023 7.032A11.955 11.955 0 0112 21.056a11.955 11.955 0 019.618-5.04m-9.618 5.04a11.955 11.955 0 01-9.618-5.04m9.618 5.04a11.955 11.955 0 019.618-5.04m-9.618-12.08c3.333 7.333 3.333 14.667 0 22m9.618-22c-3.333 7.333-3.333 14.667 0 22"></path>
                                </svg>
                            </span>
                            NFT Authentication
                        </h3>
                        <p>Each purchase comes with an NFT certificate of authenticity, minted to your wallet.</p>
                    </div>

                    <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </span>
                            Payments
                        </h3>
                        <p>All transactions are processed securely. We accept UPI, Cards, and Crypto via trusted partners.</p>
                    </div>

                    <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </span>
                            Cancellations & Refunds
                        </h3>
                        <p>Cancellations are allowed within 48 hours of payment. No returns once production starts unless defective.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-sm border border-primary-100 mt-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-3 flex items-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6l9 6 9-6M21 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2z"></path>
                            </svg>
                        </span>
                        Governing Law
                    </h3>
                    <p>These terms are governed by the laws of India. Disputes will be settled under the jurisdiction of Varanasi courts.</p>
                </div>

                <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100 text-center">
                    <p className="text-lg font-medium text-primary-800">Thank you for being part of the heritage revolution.</p>
                </div>
            </div>
        </LegalContent>
    );
} 