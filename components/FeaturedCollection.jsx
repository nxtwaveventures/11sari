'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './ui/SectionTitle';

const collections = [
    {
        id: 1,
        name: 'Kanjivaram Heritage',
        image: '/images/collections/kanjivaram.jpg',
        description: 'Timeless silk sarees woven with gold zari in traditional patterns',
        price: '₹25,000',
        rating: 4.9,
        reviews: 128,
        blockchain: true
    },
    {
        id: 2,
        name: 'Banarasi Collection',
        image: '/images/collections/banarasi.jpg',
        description: 'Rich silk sarees with intricate designs from the ancient city of Varanasi',
        price: '₹22,500',
        rating: 4.8,
        reviews: 97,
        blockchain: true
    },
    {
        id: 3,
        name: 'Patola Series',
        image: '/images/collections/patola.jpg',
        description: 'Double ikat silk sarees from Gujarat with geometric patterns',
        price: '₹31,200',
        rating: 4.7,
        reviews: 84,
        blockchain: false
    },
    {
        id: 4,
        name: 'Paithani Elegance',
        image: '/images/collections/paithani.jpg',
        description: 'Maharashtrian sarees with peacock and lotus motifs on borders',
        price: '₹28,900',
        rating: 4.8,
        reviews: 105,
        blockchain: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    },
    hover: {
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 10
        }
    }
};

const FeaturedCollection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredCollections = activeFilter === 'all'
        ? collections
        : activeFilter === 'blockchain'
            ? collections.filter(c => c.blockchain)
            : collections.filter(c => !c.blockchain);

    return (
        <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Curated Collections"
                    subtitle="Explore our handpicked selection of India's finest heritage sarees"
                    centered={true}
                />

                <div className="flex justify-center gap-4 mb-10">
                    <FilterButton
                        active={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Collections
                    </FilterButton>
                    <FilterButton
                        active={activeFilter === 'blockchain'}
                        onClick={() => setActiveFilter('blockchain')}
                    >
                        Blockchain Verified
                    </FilterButton>
                    <FilterButton
                        active={activeFilter === 'traditional'}
                        onClick={() => setActiveFilter('traditional')}
                    >
                        Traditional
                    </FilterButton>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {filteredCollections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <Link href="/collection">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                        >
                            View All Collections
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const FilterButton = ({ active, onClick, children }) => (
    <motion.button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.button>
);

const CollectionCard = ({ collection }) => {
    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                />
                {collection.blockchain && (
                    <div className="absolute top-3 right-3 bg-primary-accent px-2 py-1 rounded text-xs text-white font-medium">
                        Blockchain Verified
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold">{collection.name}</h3>

                <p className="text-gray-600 text-sm mt-2 mb-3">{collection.description}</p>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-accent">{collection.price}</span>

                    <div className="flex items-center">
                        <span className="text-amber-500">★</span>
                        <span className="ml-1 text-sm font-medium">{collection.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({collection.reviews})</span>
                    </div>
                </div>

                <Link href={`/collection/${collection.id}`}>
                    <motion.button
                        className="w-full mt-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-center transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default FeaturedCollection; 