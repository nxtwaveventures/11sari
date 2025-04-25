'use client';

import React from 'react';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold gradient-text">11Sari</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
                            Digital Sarees. Handwoven. Blockchain Verified.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                                <FiInstagram size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                                <FiFacebook size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                                <FiTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/digital-sarees" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Digital Sarees
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/weavers-portal" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Weavers Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500 transition-colors text-sm">
                                    Shipping Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Subscribe</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Join our newsletter to stay updated on new collections and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="btn-primary whitespace-nowrap text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {year} 11Sari. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                        <span>Handcrafted with ❤️ in India</span>
                        <span className="mx-2">|</span>
                        <span>Blockchain Secured</span>
                    </div>
                </div>

                {/* SEO Meta Information (Hidden) */}
                <div className="sr-only">
                    <span>handcrafted sarees India</span>
                    <span>NFT sarees</span>
                    <span>digital saree reservation</span>
                    <span>blockchain authenticated sarees</span>
                    <span>luxury handcrafted sarees</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 