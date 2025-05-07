import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample saree data - replace with your actual data
const sarees = [
    {
        id: 1,
        name: "Royal Banarasi",
        image: "/sarees/banarasi-1.jpg",
        price: "₹15,000",
        status: "Available for Reservation",
        category: "Banarasi",
        description: "Handcrafted Banarasi silk saree with intricate zari work"
    },
    {
        id: 2,
        name: "Silk Kanjivaram",
        image: "/sarees/kanjivaram-1.jpg",
        price: "₹18,000",
        status: "Available for Reservation",
        category: "Kanjivaram",
        description: "Pure silk Kanjivaram with traditional temple border"
    },
    {
        id: 3,
        name: "Designer Chanderi",
        image: "/sarees/chanderi-1.jpg",
        price: "₹12,000",
        status: "Available for Reservation",
        category: "Chanderi",
        description: "Lightweight Chanderi with modern design elements"
    },
    {
        id: 4,
        name: "Wedding Banarasi",
        image: "/sarees/banarasi-2.jpg",
        price: "₹25,000",
        status: "Available for Reservation",
        category: "Banarasi",
        description: "Heavy Banarasi silk perfect for wedding occasions"
    },
    {
        id: 5,
        name: "Classic Kanjivaram",
        image: "/sarees/kanjivaram-2.jpg",
        price: "₹20,000",
        status: "Available for Reservation",
        category: "Kanjivaram",
        description: "Traditional Kanjivaram with peacock motifs"
    },
    {
        id: 6,
        name: "Summer Chanderi",
        image: "/sarees/chanderi-2.jpg",
        price: "₹10,000",
        status: "Available for Reservation",
        category: "Chanderi",
        description: "Light and breezy Chanderi for summer occasions"
    }
];

export default function ShopPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-4">Our Collection</h1>
                    <p className="text-center text-white/90 max-w-2xl mx-auto">
                        Browse our exclusive collection of handcrafted sarees, each digitally certified for authenticity
                    </p>
                </div>
            </section>

            {/* Filters and Grid */}
            <section className="container mx-auto px-4 mt-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters */}
                    <div className="w-full md:w-64 space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Categories</h3>
                            <div className="space-y-2">
                                {['All', 'Banarasi', 'Kanjivaram', 'Chanderi'].map((category) => (
                                    <label key={category} className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-primary-500" />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Price Range</h3>
                            <div className="space-y-2">
                                {['Under ₹10,000', '₹10,000 - ₹15,000', '₹15,000 - ₹20,000', 'Above ₹20,000'].map((range) => (
                                    <label key={range} className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-primary-500" />
                                        <span>{range}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Saree Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sarees.map((saree) => (
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
                                        <p className="text-gray-600 mb-2">{saree.description}</p>
                                        <p className="text-primary-500 font-semibold mb-4">{saree.price}</p>
                                        <p className="text-sm text-green-600 mb-4">{saree.status}</p>
                                        <Link
                                            href={`/sarees/${saree.id}`}
                                            className="block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                        >
                                            Reserve Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 