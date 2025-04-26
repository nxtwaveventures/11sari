import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MayaChatbot from "@/components/ui/MayaChatbot";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "11Sari - Handcrafted Heritage Sarees with Blockchain Authentication",
  description: "Explore our exclusive collection of 121 digitally numbered sarees, reserved by you, authenticated on blockchain, and delivered to your doorstep.",
  keywords: "digital saree reservation, blockchain sarees, luxury handcrafted sarees, NFT sarees, handcrafted sarees India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <MayaChatbot />
        <CookieConsent />
      </body>
    </html>
  );
}
