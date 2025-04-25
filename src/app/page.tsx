import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrendingSarees from '@/components/home/TrendingSarees';
import BlockchainFeatures from '@/components/home/BlockchainFeatures';
import Testimonials from '@/components/home/Testimonials';
import JourneySection from '@/components/home/JourneySection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <BlockchainFeatures />
      <TrendingSarees />
      <JourneySection />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-secondary-500 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reserve Your Digital Saree?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Secure your unique handcrafted saree today with just a 30% down payment and own a piece of blockchain authenticated heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/digital-sarees"
              className="inline-block px-8 py-4 bg-white text-primary-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100"
            >
              Browse Collection
            </a>

            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl font-bold mb-2">30%</div>
              <p className="text-sm opacity-90">Down payment to reserve your saree</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-sm opacity-90">Authentic handcrafted sarees</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-sm opacity-90">Weaver communities supported</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
