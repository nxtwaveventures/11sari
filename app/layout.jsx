import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
    title: 'Eleven Sari | Premium Handcrafted Sarees with Blockchain Authentication',
    description: 'Discover authentic handloom sarees with AI-powered styling, 3D try-ons, and blockchain verification. Premium Indian craftsmanship meets modern technology. Shop now!',
    keywords: 'handloom sarees, blockchain authenticated sarees, AI stylist, premium sarees, Indian fashion, digital authentication, NFT fashion, luxury sarees',
    openGraph: {
        title: 'Eleven Sari | Premium Handcrafted Sarees with Blockchain Authentication',
        description: 'Discover authentic handloom sarees with AI-powered styling and blockchain verification. Shop now!',
        images: ['/images/og-image.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
} 