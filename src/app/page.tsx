import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Sample saree data - replace with your actual data
const featuredSarees = [
  {
    id: 1,
    name: "Royal Banarasi",
    image: "/sarees/banarasi-1.jpg",
    price: "₹15,000",
    status: "Available for Reservation"
  },
  {
    id: 2,
    name: "Silk Kanjivaram",
    image: "/sarees/kanjivaram-1.jpg",
    price: "₹18,000",
    status: "Available for Reservation"
  },
  {
    id: 3,
    name: "Designer Chanderi",
    image: "/sarees/chanderi-1.jpg",
    price: "₹12,000",
    status: "Available for Reservation"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-300/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block">
                Design or Reserve.
              </span>
              <br />
              <motion.span
                className="inline-block mt-2"
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% auto',
                  backgroundImage: 'linear-gradient(45deg, #9333ea, #4f46e5, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                We'll Weave It For You.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create your dream saree or choose from our handpicked collection.
              Each piece is a masterpiece waiting to be worn.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/design"
                className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Design Now
              </Link>
              <Link
                href="/shop"
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Shop Collection
              </Link>
              <Link
                href="/price-drop"
                className="px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white border-none flex items-center gap-2 animate-pulse hover:scale-105"
                style={{ boxShadow: '0 4px 20px 0 rgba(255, 94, 0, 0.25)' }}
              >
                <span role="img" aria-label="price drop">🔥</span>
                Saree Price Drop
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </section>

      {/* Featured Sarees Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Sarees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSarees.map((saree) => (
              <div key={saree.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={saree.image}
                    alt={saree.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{saree.name}</h3>
                  <p className="text-gray-600 mb-4">{saree.price}</p>
                  <p className="text-sm text-green-600 mb-4">{saree.status}</p>
                  <Link
                    href={`/sarees/${saree.id}`}
                    className="block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
              <p className="text-gray-600">Authentic Handcrafted Sarees</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-500 mb-2">30%</div>
              <p className="text-gray-600">Down Payment to Reserve</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
              <p className="text-gray-600">Weaver Communities Supported</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
