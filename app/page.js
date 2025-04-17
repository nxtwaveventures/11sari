'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Dynamically import components for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
    loading: () => <LoadingSpinner />,
    ssr: true
});

const FeaturedCollection = dynamic(() => import('@/components/FeaturedCollection'), {
    loading: () => <LoadingSpinner />,
    ssr: false
});

export default function Home() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <main className="relative">
                <HeroSection />
                <FeaturedCollection />
            </main>
        </Suspense>
    );
} 