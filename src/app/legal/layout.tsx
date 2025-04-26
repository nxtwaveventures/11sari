import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Legal Information - 11Sari",
    description: "Important legal information about 11Sari's terms, privacy, shipping, returns, blockchain authentication, and disclaimers.",
};

const legalLinks = [
    { title: "Terms & Conditions", href: "/legal/terms" },
    { title: "Privacy Policy", href: "/legal/privacy" },
    { title: "Shipping Policy", href: "/legal/shipping" },
    { title: "Return Policy", href: "/legal/return" },
    { title: "Blockchain Authentication", href: "/legal/blockchain-authentication" },
    { title: "Disclaimer", href: "/legal/disclaimer" },
];

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-repeat" style={{
                        backgroundImage: "url('/pattern.svg')",
                        backgroundSize: "40px",
                        transform: "rotate(5deg)"
                    }}></div>
                </div>

                {/* Header */}
                <div className="relative mb-10">
                    <Link href="/" className="text-primary-500 hover:text-primary-600 flex items-center text-sm mb-3">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Home
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
                        <span className="gradient-text">Legal Information</span>
                    </h1>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
                        At 11Sari, transparency is woven into the fabric of our business.
                        Our legal pages are carefully crafted to protect both our artisans and you.
                    </p>

                    {/* Navigation */}
                    <div className="flex overflow-x-auto whitespace-nowrap mb-10 py-2 scrollbar-hide">
                        <div className="flex space-x-2 mx-auto bg-white shadow-md rounded-full px-1 py-1">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="min-w-max px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-600"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 opacity-20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary-100 to-secondary-100 opacity-20 rounded-tr-full"></div>

                    <div className="relative">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
} 