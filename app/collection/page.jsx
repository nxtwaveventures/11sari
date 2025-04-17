'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from '@/components/ui/ParallaxSection';
import AnimatedText from '@/components/ui/AnimatedText';
import SareeCard3D from '@/components/SareeCard3D';

// Sample collection data - would come from an API in a real app
const sareeCollection = [
    {
        id: '1',
        imageUrl: '/images/saree1.jpg',
        sareeName: 'Silk Banarasi Saree',
        weaverName: 'Padmavati Textiles',
        price: '₹12,999',
        region: 'Varanasi, UP',
        color: 'hsl(354, 70%, 40%)',
    },
    {
        id: '2',
        imageUrl: '/images/saree2.jpg',
        sareeName: 'Embroidered Chiffon Saree',
        weaverName: 'Gujarat Handlooms',
        price: '₹8,499',
        region: 'Surat, Gujarat',
        color: 'hsl(196, 64%, 30%)',
        isMinted: true,
    },
    {
        id: '3',
        imageUrl: '/images/saree3.jpg',
        sareeName: 'Handloom Cotton Saree',
        weaverName: 'Bengal Weavers',
        price: '₹6,999',
        region: 'West Bengal',
        color: 'hsl(15, 80%, 80%)',
    },
    {
        id: '4',
        imageUrl: '/images/saree1.jpg',
        sareeName: 'Pure Kanjivaram Silk',
        weaverName: 'Tamil Textile House',
        price: '₹15,499',
        region: 'Tamil Nadu',
        color: 'hsl(25, 100%, 85%)',
    },
    {
        id: '5',
        imageUrl: '/images/saree2.jpg',
        sareeName: 'Patola Heritage Saree',
        weaverName: 'Patan Artisans',
        price: '₹28,999',
        region: 'Gujarat',
        color: 'hsl(354, 70%, 50%)',
    },
    {
        id: '6',
        imageUrl: '/images/saree3.jpg',
        sareeName: 'Chanderi Silk Cotton',
        weaverName: 'Madhya Pradesh Weavers',
        price: '₹9,499',
        region: 'Madhya Pradesh',
        color: 'hsl(196, 64%, 30%)',
    },
];

export default function CollectionPage() {
    const [filterType, setFilterType] = useState('all');

    return (
        <main className="min-h-screen bg-black">
            <ParallaxSection
                className="w-full py-24 px-4 md:px-8"
                overlayColor="from-[hsl(354,70%,40%)]/30 to-[hsl(196,64%,30%)]/80"
                backgroundOpacity={0.2}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <AnimatedText
                            text="Our Premium Collection"
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            once={true}
                            type="words"
                        />
                        <AnimatedText
                            text="Browse our curated selection of authentic, handcrafted sarees."
                            className="text-xl text-gray-300 max-w-2xl mx-auto"
                            once={true}
                            type="words"
                            speed={0.01}
                            delay={0.5}
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['all', 'silk', 'cotton', 'chiffon', 'chanderi', 'banarasi'].map((type) => (
                            <motion.button
                                key={type}
                                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${filterType === type
                                        ? 'bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(354,80%,30%)] text-white border-transparent'
                                        : 'border-white/30 text-white/70 hover:border-white/60'
                                    }`}
                                onClick={() => setFilterType(type)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Collection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sareeCollection.map((saree, index) => (
                            <motion.div
                                key={saree.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1 % 0.3 // Staggered animation without making later items too delayed
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <SareeCard3D
                                    id={saree.id}
                                    imageUrl={saree.imageUrl}
                                    sareeName={saree.sareeName}
                                    weaverName={saree.weaverName}
                                    price={saree.price}
                                    region={saree.region}
                                    color={saree.color}
                                    isMinted={saree.isMinted}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </main>
    );
} 