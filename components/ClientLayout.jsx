'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './ui/LoadingSpinner';
import ScrollIndicator from './ui/ScrollIndicator';
import FloatingElements from './ui/FloatingElements';

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Simulate loading for smoother transition
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Handle hydration issues
    if (!mounted) return null;

    return (
        <ErrorBoundary>
            <div className="relative min-h-screen bg-black text-white">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <Navigation />
                        <ScrollIndicator />
                        <FloatingElements />
                        <AnimatePresence mode="wait">
                            <main className="relative z-10">
                                {children}
                            </main>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </ErrorBoundary>
    );
} 