import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8 text-center">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold gradient-text mb-2">404</h1>
                        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
                    </div>

                    <p className="text-gray-600 mb-8">
                        The page you are looking for doesn't exist or has been moved.
                    </p>

                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/"
                            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            Return to Home
                        </Link>

                        <Link
                            href="/digital-sarees"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Browse Sarees
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 