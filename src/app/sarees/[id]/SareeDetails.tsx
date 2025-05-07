'use client';

import React from 'react';
import Image from 'next/image';

type SareeDetailsProps = {
    id: string;
};

// Sample saree data - replace with your actual data
const sareeData = {
    id: 1,
    name: "Royal Banarasi",
    image: "/sarees/banarasi-1.jpg",
    price: "₹15,000",
    status: "Available for Reservation",
    category: "Banarasi",
    description: "Handcrafted Banarasi silk saree with intricate zari work",
    details: {
        material: "Pure Silk",
        length: "5.5 meters",
        width: "1.1 meters",
        weight: "800 grams",
        care: "Dry clean only"
    },
    journey: {
        steps: [
            {
                title: "Reservation",
                status: "Available",
                description: "Reserve your saree with a 30% down payment"
            },
            {
                title: "Weaving",
                status: "Not Started",
                description: "Your saree will be handcrafted by skilled artisans"
            },
            {
                title: "Quality Check",
                status: "Not Started",
                description: "Each saree undergoes thorough quality inspection"
            },
            {
                title: "Authentication",
                status: "Not Started",
                description: "Your saree will be authenticated and certified"
            },
            {
                title: "Delivery",
                status: "Not Started",
                description: "Safe and secure delivery to your doorstep"
            }
        ]
    }
};

export default function SareeDetails({ id }: SareeDetailsProps) {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Saree Image and Details */}
                    <div>
                        <div className="relative h-[600px] rounded-lg overflow-hidden mb-6">
                            <Image
                                src={sareeData.image}
                                alt={sareeData.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h1 className="text-3xl font-bold mb-4">{sareeData.name}</h1>
                            <p className="text-gray-600 mb-6">{sareeData.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {Object.entries(sareeData.details).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="text-sm text-gray-500">{key}</p>
                                        <p className="font-medium">{value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-primary-500">{sareeData.price}</p>
                                <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                    Reserve Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Authentication Info */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">Authentication Details</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div>
                                    <h3 className="font-semibold text-green-700">Authentic Handcrafted</h3>
                                    <p className="text-sm text-green-600">Verified by our expert artisans</p>
                                </div>
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="border-t border-gray-100 pt-4">
                                <h3 className="font-semibold mb-2">Artisan Details</h3>
                                <p className="text-gray-600">Master Weaver Rajesh Kumar</p>
                                <p className="text-sm text-gray-500">Banaras, Uttar Pradesh</p>
                            </div>
                            <div className="border-t border-gray-100 pt-4">
                                <h3 className="font-semibold mb-2">Authentication ID</h3>
                                <p className="text-gray-600 font-mono">{id}</p>
                            </div>
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Your Saree's Journey</h2>
                        <div className="space-y-6">
                            {sareeData.journey.steps.map((step, index) => (
                                <div key={step.title} className="relative">
                                    {/* Connector Line */}
                                    {index < sareeData.journey.steps.length - 1 && (
                                        <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-200" />
                                    )}

                                    <div className="flex items-start">
                                        {/* Status Circle */}
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${step.status === "Available" ? "bg-primary-500" : "bg-gray-200"}`}>
                                            {step.status === "Available" ? (
                                                <span className="text-white">✓</span>
                                            ) : (
                                                <span className="text-gray-400">{index + 1}</span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-semibold mb-1">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow p-4 text-center">
                                <div className="text-2xl font-bold text-primary-500 mb-2">100%</div>
                                <p className="text-sm text-gray-600">Authentic Handcrafted</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4 text-center">
                                <div className="text-2xl font-bold text-primary-500 mb-2">30%</div>
                                <p className="text-sm text-gray-600">Down Payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 