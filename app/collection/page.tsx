'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Collection page component
export default function Collection() {
    // Sample sarees data - would be fetched from API in real application
    const sarees = useMemo(() => [
        { id: 'kanch001', name: 'Royal Kanjivaram', type: 'Kanjivaram', price: 8500, difficulty: 3, new: true, imageUrl: '/images/kanch001_1.jpg' },
        { id: 'bnrs002', name: 'Golden Banarasi', type: 'Banarasi', price: 6200, difficulty: 2, new: true, imageUrl: '/images/bnrs002_1.jpg' },
        { id: 'chnd003', name: 'Lilac Chanderi', type: 'Chanderi', price: 3500, difficulty: 1, new: false, imageUrl: '/images/chnd003_1.jpg' },
        { id: 'kanch004', name: 'Crimson Kanjivaram', type: 'Kanjivaram', price: 9200, difficulty: 4, new: false, imageUrl: '/images/kanch001_1.jpg' },
        { id: 'bnrs005', name: 'Emerald Banarasi', type: 'Banarasi', price: 7100, difficulty: 3, new: false, imageUrl: '/images/bnrs002_1.jpg' },
        { id: 'chnd006', name: 'Ivory Chanderi', type: 'Chanderi', price: 4100, difficulty: 2, new: false, imageUrl: '/images/chnd003_1.jpg' },
        { id: 'kanch007', name: 'Sapphire Kanjivaram', type: 'Kanjivaram', price: 9800, difficulty: 5, new: true, imageUrl: '/images/kanch001_1.jpg' },
        { id: 'bnrs008', name: 'Coral Banarasi', type: 'Banarasi', price: 6800, difficulty: 3, new: false, imageUrl: '/images/bnrs002_1.jpg' },
        { id: 'chnd009', name: 'Teal Chanderi', type: 'Chanderi', price: 3700, difficulty: 2, new: true, imageUrl: '/images/chnd003_1.jpg' },
    ], []);

    // Filter states
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [difficultyLevel, setDifficultyLevel] = useState<number[]>([]);
    const [showNewOnly, setShowNewOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Filtered sarees based on filters
    const [filteredSarees, setFilteredSarees] = useState(sarees);

    // Bubble animation for visual effect
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        size: Math.floor(Math.random() * 40) + 10,
        delay: Math.random() * 10,
        left: `${Math.random() * 100}%`,
    }));

    // Filter sarees when any filter changes
    useEffect(() => {
        // Apply filters
        let result = [...sarees];

        // Filter by type
        if (selectedTypes.length > 0) {
            result = result.filter(saree => selectedTypes.includes(saree.type));
        }

        // Filter by price
        result = result.filter(saree =>
            saree.price >= priceRange[0] && saree.price <= priceRange[1]
        );

        // Filter by difficulty
        if (difficultyLevel.length > 0) {
            result = result.filter(saree => difficultyLevel.includes(saree.difficulty));
        }

        // Filter new arrivals
        if (showNewOnly) {
            result = result.filter(saree => saree.new);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(saree =>
                saree.name.toLowerCase().includes(query) ||
                saree.type.toLowerCase().includes(query)
            );
        }

        setFilteredSarees(result);
    }, [selectedTypes, priceRange, difficultyLevel, showNewOnly, searchQuery, sarees]);

    // Toggle type selection
    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    // Toggle difficulty level
    const toggleDifficulty = (level: number) => {
        setDifficultyLevel(prev =>
            prev.includes(level)
                ? prev.filter(l => l !== level)
                : [...prev, level]
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-sunrise-100 to-ocean-100">
            {/* Ocean waves animation in the background */}
            <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-0 w-full h-64 bg-ocean-500/20 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.5)', transformOrigin: 'bottom' }}>
                </div>
                <div className="absolute bottom-0 w-full h-48 bg-ocean-600/30 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.3)', animationDelay: '0.5s', transformOrigin: 'bottom' }}>
                </div>
                <div className="absolute bottom-0 w-full h-32 bg-ocean-700/40 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.1)', animationDelay: '1s', transformOrigin: 'bottom' }}>
                </div>

                {/* Bubbles */}
                {bubbles.map((bubble, index) => (
                    <div
                        key={index}
                        className="absolute bottom-0 rounded-full bg-ocean-200/30 z-10"
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            left: bubble.left,
                            animationDelay: `${bubble.delay}s`,
                            animation: `bubble ${5 + bubble.size / 10}s ease-in-out infinite ${bubble.delay}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative container mx-auto px-4 py-8 z-10">
                {/* Header */}
                <header className="flex justify-between items-center mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <Link href="/">
                        <div className="text-3xl font-bold bg-gradient-to-r from-sunrise-500 to-sunrise-700 text-transparent bg-clip-text">11Sari.com</div>
                    </Link>
                    <nav className="flex gap-6">
                        <Link href="/collection" className="text-ocean-800 hover:text-sunrise-500 transition-colors border-b-2 border-sunrise-500">Collection</Link>
                        <Link href="/about" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Our Story</Link>
                        <Link href="/blockchain" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Blockchain</Link>
                        <Link href="/account" className="text-ocean-800 hover:text-sunrise-500 transition-colors">My Account</Link>
                    </nav>
                </header>

                {/* Page Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-sunrise-800 mb-4">Our Collection</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Browse our curated collection of premium sarees, each authenticated on the blockchain and crafted by master artisans from across India.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search sarees by name or type..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-3 px-4 pl-12 rounded-full border border-ocean-200 focus:outline-none focus:ring-2 focus:ring-sunrise-400 bg-white/90"
                        />
                        <span className="absolute left-4 top-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-64 bg-white/80 backdrop-blur-sm rounded-xl p-6 h-fit shadow-lg">
                        <h2 className="text-xl font-bold mb-6 text-sunrise-700">Filters</h2>

                        {/* Type Filter */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-3 text-gray-800">Saree Type</h3>
                            <div className="space-y-2">
                                {['Kanjivaram', 'Banarasi', 'Chanderi'].map(type => (
                                    <label key={type} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(type)}
                                            onChange={() => toggleType(type)}
                                            className="rounded text-sunrise-600 focus:ring-sunrise-500"
                                        />
                                        <span className="text-gray-700">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-3 text-gray-800">Price Range</h3>
                            <div className="px-2">
                                <div className="flex justify-between mb-2 text-sm text-gray-600">
                                    <span>₹{priceRange[0].toLocaleString()}</span>
                                    <span>₹{priceRange[1].toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="100"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full h-2 bg-ocean-200 rounded-lg appearance-none cursor-pointer accent-sunrise-600"
                                />
                            </div>
                        </div>

                        {/* Draping Difficulty Filter */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-3 text-gray-800">Draping Difficulty</h3>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(level => (
                                    <button
                                        key={level}
                                        onClick={() => toggleDifficulty(level)}
                                        className={`w-8 h-8 rounded-full font-medium text-sm flex items-center justify-center ${difficultyLevel.includes(level)
                                            ? 'bg-sunrise-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* New Arrivals Filter */}
                        <div className="mb-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={showNewOnly}
                                    onChange={() => setShowNewOnly(!showNewOnly)}
                                    className="rounded text-sunrise-600 focus:ring-sunrise-500"
                                />
                                <span className="text-gray-700">New Arrivals Only</span>
                            </label>
                        </div>

                        {/* Reset Filters */}
                        <button
                            onClick={() => {
                                setSelectedTypes([]);
                                setPriceRange([0, 10000]);
                                setDifficultyLevel([]);
                                setShowNewOnly(false);
                                setSearchQuery('');
                            }}
                            className="w-full py-2 px-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredSarees.length === 0 ? (
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-medium text-gray-800 mb-2">No sarees found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                                <button
                                    onClick={() => {
                                        setSelectedTypes([]);
                                        setPriceRange([0, 10000]);
                                        setDifficultyLevel([]);
                                        setShowNewOnly(false);
                                        setSearchQuery('');
                                    }}
                                    className="text-ocean-600 font-medium hover:text-ocean-700"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredSarees.map((saree) => (
                                    <Link href={`/product/${saree.id}`} key={saree.id} className="group">
                                        <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            <div className="relative h-64 bg-gradient-to-br from-ocean-200 to-sunrise-200 overflow-hidden">
                                                {/* Placeholder for saree image - in a real app this would be an actual image */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-lg font-medium text-gray-800">{saree.name}</span>
                                                </div>

                                                {/* New tag */}
                                                {saree.new && (
                                                    <div className="absolute top-3 right-3 bg-sunrise-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                        NEW
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-5">
                                                <h3 className="font-bold text-lg mb-1 group-hover:text-sunrise-600 transition-colors">{saree.name}</h3>
                                                <div className="flex gap-2 mb-2">
                                                    <span className="bg-ocean-100 text-ocean-800 px-2 py-0.5 rounded text-xs font-medium">
                                                        {saree.type}
                                                    </span>
                                                    <span className="bg-sunrise-100 text-sunrise-800 px-2 py-0.5 rounded text-xs font-medium">
                                                        Difficulty: {saree.difficulty}/5
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-sunrise-800">₹{saree.price.toLocaleString()}</span>
                                                    <span className="text-ocean-600 text-sm group-hover:text-ocean-800 transition-colors">View Details →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 