'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiArrowRight } from 'react-icons/fi';

export default function WeaversPortal() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // In a real app, this would redirect to the weaver dashboard
            alert('Login functionality will be implemented in the next phase.');
        }, 1500);
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white text-center">
                            <h1 className="text-2xl font-bold mb-2">Weavers Portal</h1>
                            <p className="text-white/80 text-sm">
                                Secure access for our artisan partners
                            </p>
                        </div>

                        {/* Login Form */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Username / Phone Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiUser className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Enter your username or phone"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiLock className="text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn-primary flex items-center justify-center py-3"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Logging in...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            <span>Login to Portal</span>
                                            <FiArrowRight className="ml-2" />
                                        </div>
                                    )}
                                </button>

                                <div className="mt-6 text-center">
                                    <a href="#" className="text-sm text-primary-500 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                            </form>
                        </div>

                        {/* Help Section */}
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Need help logging in? Contact our support team:
                            </p>
                            <div className="flex justify-center gap-4">
                                <a href="tel:+919663495817" className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                                    +91 96634 95817
                                </a>
                                <span className="text-gray-400">|</span>
                                <a href="mailto:elevensaree@gmail.com" className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                                    elevensaree@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                        >
                            <h3 className="text-lg font-semibold mb-3">New to 11Sari?</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                If you're a weaver looking to partner with us, please contact our weaver relations team to get started.
                            </p>
                            <a href="/contact" className="text-primary-500 font-medium text-sm flex items-center">
                                Get in Touch
                                <FiArrowRight className="ml-1" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                        >
                            <h3 className="text-lg font-semibold mb-3">Portal Features</h3>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                <li>• Upload and manage design inventory</li>
                                <li>• Track reservations and orders</li>
                                <li>• Manage your contract details</li>
                                <li>• View performance analytics</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
} 