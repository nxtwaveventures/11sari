'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SareeCard3D from './SareeCard3D';

const bodyTypes = [
    { id: 'hourglass', label: 'Hourglass', description: 'Balanced shoulders and hips with a defined waist' },
    { id: 'pear', label: 'Pear', description: 'Narrower shoulders and wider hips' },
    { id: 'apple', label: 'Apple', description: 'Fuller midsection with slimmer legs' },
    { id: 'rectangle', label: 'Rectangle', description: 'Similar width at shoulders, waist, and hips' },
    { id: 'inverted-triangle', label: 'Inverted Triangle', description: 'Broader shoulders and narrower hips' }
];

const skinTones = [
    { id: 'fair', label: 'Fair', color: '#f8d5c2' },
    { id: 'light', label: 'Light', color: '#e8b89b' },
    { id: 'medium', label: 'Medium', color: '#c68863' },
    { id: 'olive', label: 'Olive', color: '#9c7248' },
    { id: 'tan', label: 'Tan', color: '#895537' },
    { id: 'deep', label: 'Deep', color: '#613d30' }
];

// Sample recommended sarees data
const recommendedSarees = {
    'hourglass-fair': [
        { id: '1', sareeName: 'Royal Blue Kanjivaram', weaverName: 'Padmavati Textiles', price: '₹7,999', region: 'Tamil Nadu', color: '#1a237e', isMinted: true },
        { id: '2', sareeName: 'Emerald Green Banarasi', weaverName: 'Varanasi Weavers', price: '₹9,499', region: 'Uttar Pradesh', color: '#1b5e20', isMinted: false }
    ],
    'pear-medium': [
        { id: '3', sareeName: 'Maroon Chanderi', weaverName: 'Chanderi Crafts', price: '₹4,599', region: 'Madhya Pradesh', color: '#880e4f', isMinted: false },
        { id: '4', sareeName: 'Teal Mysore Silk', weaverName: 'Karnataka Silks', price: '₹6,299', region: 'Karnataka', color: '#00695c', isMinted: true }
    ],
    'apple-deep': [
        { id: '5', sareeName: 'Black Sambalpuri', weaverName: 'Odisha Handlooms', price: '₹5,799', region: 'Odisha', color: '#212121', isMinted: false },
        { id: '6', sareeName: 'Navy Pochampally', weaverName: 'Telangana Weaves', price: '₹6,899', region: 'Telangana', color: '#0d47a1', isMinted: true }
    ],
    'default': [
        { id: '7', sareeName: 'Purple Paithani', weaverName: 'Maharashtra Handlooms', price: '₹8,299', region: 'Maharashtra', color: '#4a148c', isMinted: false },
        { id: '8', sareeName: 'Mustard Baluchari', weaverName: 'Bengal Weavers', price: '₹7,699', region: 'West Bengal', color: '#f57f17', isMinted: true }
    ]
};

const AIStylistModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [bodyType, setBodyType] = useState('');
    const [skinTone, setSkinTone] = useState('');
    const [occasion, setOccasion] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call to AI recommendation engine
        setTimeout(() => {
            const key = `${bodyType}-${skinTone}`;
            const recommendations = recommendedSarees[key] || recommendedSarees.default;
            setResults(recommendations);
            setLoading(false);
            setStep(3);
        }, 1500);
    };

    const resetForm = () => {
        setBodyType('');
        setSkinTone('');
        setOccasion('');
        setResults([]);
        setStep(1);
    };

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
    };

    // Backdrop variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
            >
                {/* Modal */}
                <motion.div
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl w-full max-w-3xl mx-auto overflow-hidden"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[hsl(354,70%,40%)] to-[hsl(354,80%,30%)] p-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-2xl font-bold">AI Saree Stylist</h2>
                            <button
                                onClick={onClose}
                                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Step indicators */}
                        <div className="flex justify-center mb-8">
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[hsl(354,70%,40%)]' : 'bg-gray-600'} text-white font-medium`}>1</div>
                                <div className={`w-16 h-1 ${step >= 2 ? 'bg-[hsl(354,70%,40%)]' : 'bg-gray-600'}`}></div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[hsl(354,70%,40%)]' : 'bg-gray-600'} text-white font-medium`}>2</div>
                                <div className={`w-16 h-1 ${step >= 3 ? 'bg-[hsl(354,70%,40%)]' : 'bg-gray-600'}`}></div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[hsl(354,70%,40%)]' : 'bg-gray-600'} text-white font-medium`}>3</div>
                            </div>
                        </div>

                        {step === 1 && (
                            <div className="space-y-6">
                                <h3 className="text-xl text-white font-semibold">What's your body type?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {bodyTypes.map((type) => (
                                        <div
                                            key={type.id}
                                            className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${bodyType === type.id
                                                ? 'border-[hsl(354,70%,40%)] bg-[hsl(354,70%,40%)]/10'
                                                : 'border-gray-700 hover:border-[hsl(15,80%,80%)]'
                                                }`}
                                            onClick={() => setBodyType(type.id)}
                                        >
                                            <div className="font-semibold text-white">{type.label}</div>
                                            <div className="text-gray-400 text-sm">{type.description}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={() => setStep(2)}
                                        disabled={!bodyType}
                                        className={`px-6 py-2 rounded-full font-medium ${bodyType
                                            ? 'bg-[hsl(354,70%,40%)] hover:bg-[hsl(354,70%,35%)] text-white'
                                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <h3 className="text-xl text-white font-semibold">What's your skin tone?</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {skinTones.map((tone) => (
                                        <div
                                            key={tone.id}
                                            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 transition-all ${skinTone === tone.id
                                                ? 'border-[hsl(354,70%,40%)] bg-[hsl(354,70%,40%)]/10'
                                                : 'border-gray-700 hover:border-[hsl(15,80%,80%)]'
                                                }`}
                                            onClick={() => setSkinTone(tone.id)}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-full mb-2"
                                                style={{ backgroundColor: tone.color }}
                                            ></div>
                                            <div className="font-medium text-white">{tone.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <h3 className="text-xl text-white font-semibold mb-4">What's the occasion?</h3>
                                    <select
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
                                    >
                                        <option value="">Select an occasion</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="formal">Formal Event</option>
                                        <option value="casual">Casual Gathering</option>
                                        <option value="festival">Festival</option>
                                        <option value="office">Office Wear</option>
                                    </select>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-6 py-2 rounded-full font-medium border border-gray-600 text-white hover:bg-gray-700"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!skinTone || !occasion}
                                        className={`px-6 py-2 rounded-full font-medium ${skinTone && occasion
                                            ? 'bg-[hsl(354,70%,40%)] hover:bg-[hsl(354,70%,35%)] text-white'
                                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Get Recommendations
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl text-white font-semibold">Your Recommendations</h3>
                                    <button
                                        onClick={resetForm}
                                        className="text-[hsl(15,80%,80%)] hover:text-[hsl(25,100%,85%)] text-sm"
                                    >
                                        Start Over
                                    </button>
                                </div>

                                {loading ? (
                                    <div className="flex flex-col items-center justify-center py-12">
                                        <div className="w-12 h-12 border-4 border-[hsl(354,70%,40%)] border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-white mt-4">Our AI is crafting perfect suggestions for you...</p>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-gray-300">
                                            Based on your {bodyTypes.find(b => b.id === bodyType)?.label.toLowerCase()} figure,
                                            {skinTones.find(s => s.id === skinTone)?.label.toLowerCase()} skin tone, and
                                            {occasion} occasion, we recommend these exquisite sarees:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                            {results.map((saree) => (
                                                <SareeCard3D
                                                    key={saree.id}
                                                    id={saree.id}
                                                    sareeName={saree.sareeName}
                                                    weaverName={saree.weaverName}
                                                    price={saree.price}
                                                    region={saree.region}
                                                    color={saree.color}
                                                    isMinted={saree.isMinted}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AIStylistModal; 