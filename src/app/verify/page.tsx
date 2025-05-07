'use client';

import React, { useState } from 'react';

interface SareeDetails {
    name: string;
    description: string;
    artisan: string;
    timestamp: number;
    status: string;
}

interface SareeDatabase {
    [key: string]: SareeDetails;
}

// Mock data for demonstration
const mockSarees: SareeDatabase = {
    'SAREE001': {
        name: 'Royal Banarasi Silk',
        description: 'Handwoven pure silk Banarasi saree with intricate zari work',
        artisan: 'Master Weaver Rajesh Kumar',
        timestamp: Date.now() / 1000,
        status: 'Authentic'
    },
    'SAREE002': {
        name: 'Kanjivaram Classic',
        description: 'Traditional Kanjivaram silk with temple border design',
        artisan: 'Weaver Family of Kanchipuram',
        timestamp: Date.now() / 1000,
        status: 'Authentic'
    }
};

export default function VerifyPage() {
    const [sareeId, setSareeId] = useState('');
    const [verificationResult, setVerificationResult] = useState<SareeDetails | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const verifySaree = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setVerificationResult(null);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const details = mockSarees[sareeId];
            if (details) {
                setVerificationResult(details);
            } else {
                setError('This saree is not authenticated in our system');
            }
        } catch (error) {
            setError('Unable to verify saree at this time');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-3">
                            Verify Your Saree
                        </h1>
                        <p className="text-gray-600">
                            Check the authenticity and journey of your handcrafted saree
                        </p>
                    </div>

                    {/* Verification Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <form onSubmit={verifySaree} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    value={sareeId}
                                    onChange={(e) => setSareeId(e.target.value)}
                                    placeholder="Enter your saree's ID (e.g., SAREE001)"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary-500 text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50"
                            >
                                {isLoading ? 'Verifying...' : 'Verify Now'}
                            </button>
                        </form>

                        {/* Error Message */}
                        {error && (
                            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl text-center">
                                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>{error}</p>
                            </div>
                        )}

                        {/* Verification Result */}
                        {verificationResult && (
                            <div className="mt-8 space-y-6">
                                <div className="p-6 bg-green-50 text-green-700 rounded-xl text-center">
                                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <h3 className="text-xl font-semibold mb-2">Authentic Saree</h3>
                                    <p className="text-sm">This saree is verified in our authentication system</p>
                                </div>

                                <div className="border-2 border-gray-100 rounded-xl p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">{verificationResult.name}</h4>
                                            <p className="text-gray-600">{verificationResult.description}</p>
                                        </div>

                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>Artisan: {verificationResult.artisan}</span>
                                            <span>Authenticated: {new Date(verificationResult.timestamp * 1000).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center text-sm text-gray-500">
                                    <p>This verification confirms the authenticity and origin of your saree</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 