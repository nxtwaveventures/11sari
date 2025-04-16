'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useParams } from 'next/navigation';
import { sareeData } from '../../../utils/sareeData';
import type { Saree } from '../../../utils/sareeData';

// Bubble component for ocean animation
const Bubble = ({ size, delay, left }: { size: number, delay: number, left: string }) => {
    return (
        <div
            className={`absolute bottom-0 rounded-full bg-ocean-200/30 z-10`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: left,
                animationDelay: `${delay}s`,
                animation: `bubble ${5 + size / 10}s ease-in-out infinite ${delay}s`
            }}
        ></div>
    );
};

// Placeholder 3D Model component
function SareeModel({ modelUrl, color }) {
    // In reality, this would load the actual GLB model
    // const { scene } = useGLTF(modelUrl);

    return (
        <mesh>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial color={color || "#8a4af3"} />
        </mesh>
    );
}

// AI Stylist Chat Widget Component
function AIStylistChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hello! I\'m your AI stylist. I can help you style this saree based on your body type, skin tone, and the occasion. How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { sender: 'user', text: input }]);

        // Simulate AI response (in a real app, this would call the ChatGPT API)
        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: 'That\'s a great question! For this particular saree, I would recommend...'
            }]);
        }, 1000);

        setInput('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-sunrise-600 text-white p-4 rounded-full shadow-lg hover:bg-sunrise-700 transition-colors"
                >
                    <span className="sr-only">Open AI Stylist</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            ) : (
                <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 overflow-hidden flex flex-col max-h-[500px]">
                    <div className="bg-gradient-to-r from-sunrise-600 to-ocean-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-medium">AI Stylist</h3>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-80">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`${msg.sender === 'user'
                                    ? 'ml-auto bg-sunrise-100 text-gray-800'
                                    : 'mr-auto bg-ocean-100 text-gray-800'
                                    } rounded-lg p-3 max-w-[80%]`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="border-t p-3 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about styling this saree..."
                            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-sunrise-600 text-white px-4 py-2 rounded-r-lg hover:bg-sunrise-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProductPage() {
    const params = useParams();
    const id = params?.id as string;
    const [saree, setSaree] = useState<Saree | null>(null);
    const [activeTab, setActiveTab] = useState('details');
    const [isNFTMinting, setIsNFTMinting] = useState(false);
    const [mintedNFT, setMintedNFT] = useState<{
        tokenId: number;
        transactionHash: string;
        ownerAddress: string;
    } | null>(null);

    // Generate random bubbles for ocean effect
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        size: Math.floor(Math.random() * 30) + 10,
        delay: Math.random() * 10,
        left: `${Math.random() * 100}%`,
    }));

    useEffect(() => {
        // In a real app, this would fetch from an API
        if (id && sareeData[id]) {
            setSaree(sareeData[id]);
        }
    }, [id]);

    const handleMintNFT = async () => {
        // This would connect to wallet and mint NFT on Polygon
        setIsNFTMinting(true);

        // Simulate minting process
        setTimeout(() => {
            setIsNFTMinting(false);
            setMintedNFT({
                tokenId: Math.floor(Math.random() * 1000) + 1,
                transactionHash: `0x${Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
                ownerAddress: '0x1234...5678'
            });
        }, 3000);
    };

    // Get model color based on saree type
    const getModelColor = (type) => {
        switch (type) {
            case 'Kanjivaram': return '#B93A1F'; // Dark orange/red
            case 'Banarasi': return '#E64D29';   // Orange
            case 'Chanderi': return '#00ACC1';   // Teal
            default: return '#8a4af3';           // Purple
        }
    };

    if (!saree) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-sunrise-100 to-ocean-100 flex items-center justify-center">
                <div className="container mx-auto px-4 py-16 text-center">
                    <div className="animate-pulse">
                        <div className="h-8 bg-sunrise-200 rounded w-1/3 mx-auto mb-4"></div>
                        <div className="h-64 bg-ocean-200 rounded mb-6"></div>
                        <div className="h-4 bg-sunrise-200 rounded w-1/2 mx-auto mb-2"></div>
                        <div className="h-4 bg-ocean-200 rounded w-1/3 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-sunrise-100 to-ocean-100">
            {/* Ocean waves and bubbles animation in the background */}
            <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none opacity-40">
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
                    <Bubble
                        key={index}
                        size={bubble.size}
                        delay={bubble.delay}
                        left={bubble.left}
                    />
                ))}
            </div>

            <div className="relative container mx-auto px-4 py-8 z-10">
                <div className="mb-8 bg-white/80 backdrop-blur-sm p-3 rounded-lg inline-block shadow-md">
                    <Link href="/" className="text-sunrise-600 hover:text-sunrise-800 transition-colors flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column - 3D Viewer */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden h-[600px] shadow-xl">
                        <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading 3D Model...</div>}>
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                <SareeModel modelUrl={saree.model3dUrl} color={getModelColor(saree.type)} />
                                <Environment preset="sunset" />
                                <OrbitControls enableZoom={true} enablePan={true} />
                            </Canvas>
                        </Suspense>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                        <h1 className="text-3xl font-bold mb-2 text-sunrise-800">{saree.name}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full text-sm font-medium">
                                {saree.type}
                            </span>
                            <span className="bg-sunrise-100 text-sunrise-800 px-3 py-1 rounded-full text-sm font-medium">
                                Drape Difficulty: {saree.difficulty}/5
                            </span>
                        </div>

                        <div className="text-2xl font-bold mb-6 text-sunrise-700">₹{saree.price.toLocaleString()}</div>

                        <p className="text-gray-700 mb-8">{saree.description}</p>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-6">
                            <nav className="flex space-x-8">
                                <button
                                    onClick={() => setActiveTab('details')}
                                    className={`py-4 px-1 ${activeTab === 'details'
                                        ? 'border-b-2 border-sunrise-600 text-sunrise-600'
                                        : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                                        }`}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => setActiveTab('blockchain')}
                                    className={`py-4 px-1 ${activeTab === 'blockchain'
                                        ? 'border-b-2 border-sunrise-600 text-sunrise-600'
                                        : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                                        }`}
                                >
                                    Blockchain Verification
                                </button>
                                <button
                                    onClick={() => setActiveTab('caring')}
                                    className={`py-4 px-1 ${activeTab === 'caring'
                                        ? 'border-b-2 border-sunrise-600 text-sunrise-600'
                                        : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                                        }`}
                                >
                                    Care Instructions
                                </button>
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="mb-8">
                            {activeTab === 'details' && (
                                <div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="font-medium text-gray-900">Origin</h3>
                                            <p className="text-gray-700">{saree.origin}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Weaver ID</h3>
                                            <p className="text-gray-700">{saree.weaverId}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Natural Dyes</h3>
                                            <p className="text-gray-700">{saree.dyes}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">Draping Difficulty</h3>
                                            <p className="text-gray-700">{saree.difficulty}/5</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'blockchain' && (
                                <div>
                                    <p className="text-gray-700 mb-4">
                                        Each saree in our collection is linked to a unique NFT on Polygon that verifies its authenticity, artisan details, and material composition.
                                    </p>

                                    {!mintedNFT ? (
                                        <button
                                            onClick={handleMintNFT}
                                            disabled={isNFTMinting}
                                            className={`w-full py-3 rounded-lg font-medium ${isNFTMinting
                                                ? 'bg-gray-300 text-gray-500'
                                                : 'bg-gradient-to-r from-sunrise-600 to-ocean-600 text-white hover:from-sunrise-700 hover:to-ocean-700'
                                                } transition-colors flex items-center justify-center shadow-md`}
                                        >
                                            {isNFTMinting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Minting NFT...
                                                </>
                                            ) : (
                                                'Mint NFT (0.01 MATIC)'
                                            )}
                                        </button>
                                    ) : (
                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="font-medium text-green-800 mb-2">NFT Successfully Minted!</div>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div>
                                                    <span className="text-gray-600">Token ID:</span>
                                                    <span className="ml-2 font-mono text-gray-800">{mintedNFT.tokenId}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Owner:</span>
                                                    <span className="ml-2 font-mono text-gray-800 truncate">{mintedNFT.ownerAddress}</span>
                                                </div>
                                                <div className="col-span-2">
                                                    <span className="text-gray-600">Transaction:</span>
                                                    <span className="ml-2 font-mono text-gray-800 truncate">{mintedNFT.transactionHash}</span>
                                                </div>
                                            </div>
                                            <a
                                                href={`https://mumbai.polygonscan.com/tx/${mintedNFT.transactionHash}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-ocean-600 text-sm hover:text-ocean-800 mt-2 inline-block"
                                            >
                                                View on Polygon Explorer →
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'caring' && (
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Care Instructions</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Dry clean recommended for first cleaning</li>
                                        <li>Gentle hand wash with mild detergent</li>
                                        <li>Do not bleach or use harsh chemicals</li>
                                        <li>Dry in shade, avoid direct sunlight</li>
                                        <li>Store in a muslin cloth to protect from dust</li>
                                        <li>Steam iron on medium heat</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button className="bg-sunrise-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-sunrise-700 transition-colors shadow-md">
                                Add to Cart
                            </button>
                            <button className="bg-white text-ocean-600 border border-ocean-600 py-3 px-6 rounded-lg font-medium hover:bg-ocean-50 transition-colors shadow-md">
                                Try-On with AI
                            </button>
                        </div>
                    </div>
                </div>

                {/* AI Stylist Chat Widget */}
                <AIStylistChat />
            </div>
        </div>
    );
} 