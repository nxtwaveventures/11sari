'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample NFT data
const sampleNFTs = [
    {
        id: 'nft001',
        sareeId: 'kanch001',
        name: 'Royal Kanjivaram NFT #1432',
        tokenId: '1432',
        mintDate: '2024-04-12',
        transactionHash: '0x3a8d45bcf2a8d84a8a35c52b5c2d8e1d987f257a012b4fd7f9988123dcf82a11',
        owner: '0x7e57...8f21',
        metadata: {
            artisan: 'Vishwanath Iyer',
            location: 'Kanchipuram, Tamil Nadu',
            materials: 'Pure silk, gold zari',
            certifications: ['Fair Trade', 'Handloom Mark'],
        },
        imageUrl: '/images/kanch001_1.jpg'
    },
    {
        id: 'nft002',
        sareeId: 'bnrs002',
        name: 'Golden Banarasi NFT #2156',
        tokenId: '2156',
        mintDate: '2024-04-10',
        transactionHash: '0x7b2c1d64f9a8b3e6f4d5e2a1c0b9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0',
        owner: '0x3f12...9e45',
        metadata: {
            artisan: 'Anil Kumar Maurya',
            location: 'Varanasi, Uttar Pradesh',
            materials: 'Pure silk, silver zari',
            certifications: ['Handloom Mark', 'GI Tagged'],
        },
        imageUrl: '/images/bnrs002_1.jpg'
    },
    {
        id: 'nft003',
        sareeId: 'chnd003',
        name: 'Azure Chanderi NFT #3789',
        tokenId: '3789',
        mintDate: '2024-04-15',
        transactionHash: '0x1e9d8b7c6f5a4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8',
        owner: '0x5d23...1a78',
        metadata: {
            artisan: 'Lakshmi Devi',
            location: 'Chanderi, Madhya Pradesh',
            materials: 'Cotton-silk blend, gold thread',
            certifications: ['Handloom Mark'],
        },
        imageUrl: '/images/chnd003_1.jpg'
    }
];

export default function Blockchain() {
    const [selectedNFT, setSelectedNFT] = useState(sampleNFTs[0]);
    const [verifying, setVerifying] = useState(false);
    const [verified, setVerified] = useState(false);

    // Generate ocean animation elements
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        size: Math.floor(Math.random() * 40) + 10,
        delay: Math.random() * 10,
        left: `${Math.random() * 100}%`,
    }));

    // Simulate verification process
    const verifyNFT = () => {
        setVerifying(true);
        setTimeout(() => {
            setVerifying(false);
            setVerified(true);
        }, 2500);
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
                        <Link href="/collection" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Collection</Link>
                        <Link href="/about" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Our Story</Link>
                        <Link href="/blockchain" className="text-ocean-800 hover:text-sunrise-500 transition-colors border-b-2 border-sunrise-500">Blockchain</Link>
                        <Link href="/account" className="text-ocean-800 hover:text-sunrise-500 transition-colors">My Account</Link>
                    </nav>
                </header>

                {/* Page Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-sunrise-800 mb-4">Blockchain Verification</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Each saree in our collection is authenticated on the Polygon blockchain as a unique NFT, providing verifiable provenance and artisan information.
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column: NFT Gallery */}
                    <div className="lg:w-1/3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold mb-6 text-sunrise-700">Recently Minted NFTs</h2>
                            <div className="space-y-4">
                                {sampleNFTs.map((nft) => (
                                    <div
                                        key={nft.id}
                                        onClick={() => {
                                            setSelectedNFT(nft);
                                            setVerified(false);
                                        }}
                                        className={`p-4 rounded-lg cursor-pointer transition-all ${selectedNFT.id === nft.id
                                            ? 'bg-sunrise-100 border-l-4 border-sunrise-500'
                                            : 'bg-white hover:bg-ocean-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-ocean-200 to-sunrise-200 rounded-md flex items-center justify-center">
                                                <span className="font-bold text-xs">#{nft.tokenId}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">{nft.name}</h3>
                                                <p className="text-sm text-gray-600">Minted on {nft.mintDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: NFT Details */}
                    <div className="flex-1">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                            {/* NFT Header */}
                            <div className="bg-gradient-to-r from-sunrise-600 to-ocean-600 p-6">
                                <h2 className="text-white text-2xl font-bold">{selectedNFT.name}</h2>
                                <p className="text-white/80">Token ID: {selectedNFT.tokenId}</p>
                            </div>

                            <div className="p-6">
                                {/* NFT Content */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* NFT Image */}
                                    <div className="md:w-64 h-64 bg-gradient-to-br from-ocean-100 to-sunrise-100 rounded-lg flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <div className="h-48 bg-white/50 rounded flex items-center justify-center">
                                                <span className="text-lg font-medium text-gray-800">Saree Image Placeholder</span>
                                            </div>
                                            <Link href={`/product/${selectedNFT.sareeId}`} className="mt-2 text-ocean-600 text-sm hover:text-ocean-800 transition-colors inline-block">
                                                View Product →
                                            </Link>
                                        </div>
                                    </div>

                                    {/* NFT Metadata */}
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900 mb-4">Token Metadata</h3>
                                        <div className="space-y-3">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Owner</span>
                                                <span className="font-mono text-sm">{selectedNFT.owner}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Artisan</span>
                                                <span>{selectedNFT.metadata.artisan}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Origin</span>
                                                <span>{selectedNFT.metadata.location}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Materials</span>
                                                <span>{selectedNFT.metadata.materials}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Certifications</span>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {selectedNFT.metadata.certifications.map((cert, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-sunrise-100 text-sunrise-800 rounded text-xs"
                                                        >
                                                            {cert}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Transaction Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="font-medium text-gray-900 mb-2">Transaction Information</h3>
                                    <div className="bg-gray-100 p-3 rounded-lg overflow-x-auto">
                                        <code className="text-xs font-mono text-gray-800 break-all">
                                            {selectedNFT.transactionHash}
                                        </code>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <a
                                            href={`https://mumbai.polygonscan.com/tx/${selectedNFT.transactionHash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ocean-600 text-sm hover:text-ocean-800 transition-colors"
                                        >
                                            View on Polygon Explorer
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Verification */}
                                <div className="mt-8">
                                    {verified ? (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium text-green-800">Authenticity Verified</p>
                                                <p className="text-sm text-green-700">This NFT has been verified on the Polygon blockchain.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={verifyNFT}
                                            disabled={verifying}
                                            className={`w-full py-3 px-4 rounded-lg font-medium ${verifying
                                                    ? 'bg-gray-300 text-gray-600'
                                                    : 'bg-gradient-to-r from-sunrise-600 to-ocean-600 text-white hover:from-sunrise-700 hover:to-ocean-700'
                                                } transition-colors flex items-center justify-center`}
                                        >
                                            {verifying ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Verifying on Blockchain...
                                                </>
                                            ) : (
                                                'Verify Authenticity'
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-center mb-12 text-sunrise-800">How Our Blockchain Verification Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Step 1 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="h-12 w-12 rounded-full bg-sunrise-100 text-sunrise-800 flex items-center justify-center font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2 text-sunrise-700">Creation</h3>
                            <p className="text-gray-700">
                                Each saree's details, including artisan information, materials, and production process, are recorded and prepared for blockchain storage.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="h-12 w-12 rounded-full bg-ocean-100 text-ocean-800 flex items-center justify-center font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2 text-ocean-700">Minting</h3>
                            <p className="text-gray-700">
                                An NFT is minted on the Polygon blockchain, creating a permanent, tamper-proof record of the saree's authenticity and origin.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <div className="h-12 w-12 rounded-full bg-sunrise-100 text-sunrise-800 flex items-center justify-center font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2 text-sunrise-700">Verification</h3>
                            <p className="text-gray-700">
                                Customers can verify authenticity at any time by checking the blockchain record, ensuring complete transparency in the supply chain.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-sunrise-600 to-ocean-600 rounded-xl p-8 text-white text-center shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Ready to Own an Authentic Piece of Indian Heritage?</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Browse our collection of blockchain-verified sarees and own a piece of art with traceable provenance.
                    </p>
                    <Link href="/collection" className="inline-block bg-white text-ocean-800 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                        Explore Collection
                    </Link>
                </div>
            </div>
        </div>
    );
} 