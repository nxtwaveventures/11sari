import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Eleven Sari - Luxury Handcrafted Sarees',
    description: 'Discover our collection of authentic, blockchain-verified luxury sarees. Experience traditional craftsmanship with modern innovation.',
    keywords: 'saree, luxury saree, handcrafted saree, blockchain verified, indian fashion, traditional wear',
    openGraph: {
        title: 'Eleven Sari - Luxury Handcrafted Sarees',
        description: 'Discover our collection of authentic, blockchain-verified luxury sarees',
        url: 'https://elevensari.com',
        siteName: 'Eleven Sari',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Eleven Sari Collection',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eleven Sari - Luxury Handcrafted Sarees',
        description: 'Discover our collection of authentic, blockchain-verified luxury sarees',
        images: ['/images/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="preload"
                    href="/fonts/your-custom-font.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                {/* Preload critical assets */}
                <link
                    rel="preload"
                    href="/images/saree-pattern-gold.png"
                    as="image"
                />
            </head>
            <body className={inter.className}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
} 