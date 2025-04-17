'use client';

import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Log error to your analytics service
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
                    <div className="text-center space-y-8 max-w-xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl font-thin mb-4">Something went wrong</h1>
                            <p className="text-gray-400 mb-8">
                                We apologize for the inconvenience. Our team has been notified and is working on the fix.
                            </p>

                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                            >
                                Try Again
                            </button>

                            {process.env.NODE_ENV === 'development' && (
                                <div className="mt-8 text-left">
                                    <details className="bg-gray-800/50 rounded-lg p-4 text-sm">
                                        <summary className="cursor-pointer text-amber-400 mb-2">
                                            Error Details
                                        </summary>
                                        <pre className="text-gray-400 overflow-auto">
                                            {this.state.error && this.state.error.toString()}
                                            <br />
                                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                                        </pre>
                                    </details>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 