import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '11Sari - Where Sunrise Meets Ocean',
    description: 'Discover and mint NFT-linked digital twins for premium sarees from the finest weavers in India, with sunrise and ocean-inspired designs',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
} 