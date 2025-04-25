import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrendingSarees from '@/components/home/TrendingSarees';
import BlockchainFeatures from '@/components/home/BlockchainFeatures';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BlockchainFeatures />
      <TrendingSarees />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reserve Your Digital Saree?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Secure your unique handcrafted saree today with just a 30% down payment and own a piece of blockchain authenticated heritage.
          </p>
          <a
            href="/digital-sarees"
            className="inline-block px-8 py-3 bg-white text-primary-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100"
          >
            Browse Collection
          </a>
        </div>
      </section>
    </>
  );
}
