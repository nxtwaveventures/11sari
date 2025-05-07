'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Saree } from '@/data/sarees';
import { processPayment } from '@/services/payment';
import { stripePromise } from '@/lib/stripe';

interface SareeDetailsProps {
    saree: Saree;
}

export default function SareeDetails({ saree }: SareeDetailsProps) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePayment = async () => {
        try {
            const paymentDetails = {
                amount: saree.price,
                currency: 'inr',
                description: `Reservation for ${saree.name}`,
                customerName: 'Customer Name', // This should come from a form
                customerEmail: 'customer@email.com' // This should come from a form
            };

            const stripe = await stripePromise;
            if (!stripe) throw new Error('Stripe failed to initialize');

            const elements = stripe.elements();
            elements.create('payment');

            const result = await processPayment(paymentDetails, elements);

            if (result.error) {
                console.error('Payment failed:', result.error);
                throw new Error(result.error.message);
            } else {
                // Handle successful payment
                console.log('Payment successful');
            }
        } catch (error) {
            console.error('Payment error:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            await handlePayment();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during payment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Link href="/digital-sarees" className="text-primary-500 hover:text-primary-600 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back to All Sarees
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Saree Details */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-96 bg-gradient-to-br from-primary-50 to-secondary-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-semibold">{saree.name}</span>
                            </div>
                            {saree.isReserved && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                    Reserved
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-gray-500">NFT ID: {saree.nftId}</span>
                                <div className="flex -space-x-1">
                                    {saree.colors.map((color, idx) => (
                                        <div
                                            key={idx}
                                            className="w-6 h-6 rounded-full border border-white"
                                            style={{ backgroundColor: color.toLowerCase() }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold mb-2">{saree.name}</h1>
                            <p className="text-gray-600 mb-4">By {saree.weaver}</p>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-2xl font-bold text-primary-600">₹{saree.price.toLocaleString()}</span>
                                <span className="text-sm text-gray-500">{saree.material}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <h2 className="text-lg font-semibold mb-2">Description</h2>
                                <p className="text-gray-600">
                                    This exquisite {saree.material} saree features intricate designs and traditional motifs.
                                    Each piece is handcrafted by skilled artisans, ensuring unique craftsmanship and quality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">Reservation Steps</h2>
                                <span className="text-sm text-gray-500">Step {step} of 3</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className={`w-1/3 h-1 ${step >= 1 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                                <div className={`w-1/3 h-1 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                                <div className={`w-1/3 h-1 ${step >= 3 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-medium mb-4">Payment Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                required
                                                maxLength={16}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    value={formData.expiryDate}
                                                    onChange={handleInputChange}
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                    required
                                                    maxLength={5}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                    required
                                                    maxLength={3}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div className="mt-6 flex justify-between">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 ml-auto disabled:opacity-50"
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : step === 3 ? 'Complete Reservation' : 'Continue'}
                                </button>
                            </div>

                            {error && (
                                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 