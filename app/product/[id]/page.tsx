'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
    MessageSquare,
    ShoppingBag,
    Info,
    Star,
    Shield,
    DollarSign,
    Truck
} from 'lucide-react';
import * as THREE from 'three';

// Mock data for the saree types
const sareeData = {
    '1': {
        id: '1',
        name: 'Royal Kanjivaram Silk',
        price: '₹8,999',
        weaverId: 'WVR-12345',
        dyeIngredients: 'Natural indigo, turmeric, madder root',
        drapeDifficulty: 3,
        description: 'Exquisite Kanjivaram silk saree with intricate gold zari work and traditional temple border design. This luxurious piece showcases the exceptional craftsmanship of Tamil Nadu weavers.',
        material: '100% Pure Silk',
        color: 'Royal Blue with Gold Border',
        modelPath: '/models/kanjivaram.glb', // placeholder - would be a real 3D model path
        rating: 4.8,
        reviews: 24,
    },
    '2': {
        id: '2',
        name: 'Banarasi Heritage',
        price: '₹6,499',
        weaverId: 'WVR-23456',
        dyeIngredients: 'Saffron, lac dye, iron mordant',
        drapeDifficulty: 4,
        description: 'Traditional Banarasi saree with elaborate brocade patterns and intricate zari work. Handcrafted by master artisans from Varanasi, this saree represents the pinnacle of Indian textile heritage.',
        material: 'Silk with Gold Zari',
        color: 'Crimson Red with Golden Motifs',
        modelPath: '/models/banarasi.glb', // placeholder
        rating: 4.9,
        reviews: 36,
    },
    '3': {
        id: '3',
        name: 'Chanderi Fusion',
        price: '₹3,699',
        weaverId: 'WVR-34567',
        dyeIngredients: 'Pomegranate rind, myrobalan, ferrous sulfate',
        drapeDifficulty: 2,
        description: 'Lightweight Chanderi saree with contemporary geometric patterns blended with traditional motifs. The perfect balance of heritage and modern aesthetics.',
        material: 'Chanderi Cotton-Silk Blend',
        color: 'Mint Green with Silver Accents',
        modelPath: '/models/chanderi.glb', // placeholder
        rating: 4.7,
        reviews: 18,
    }
};

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ];
}

// Placeholder 3D model for the saree
function SareeModel({ modelPath }: { modelPath: string }) {
    // This would load the actual model in production
    // For now we'll create a simple 3D representation of fabric

    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.005;
            mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.5, 2, 2]} />
            <meshStandardMaterial
                color="#4a6fbf"
                metalness={0.1}
                roughness={0.2}
                envMapIntensity={0.5}
            />
        </mesh>
    );
}

// Placeholder AI Stylist Chat Component
function AIStyleChat() {
    const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'ai' }[]>([
        {
            text: "Hello! I'm your AI Stylist. I can help you style this saree based on your body type, skin tone, and occasion. How can I assist you today?",
            sender: 'ai'
        }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages([...messages, { text: input, sender: 'user' }]);

        // Simulate AI response (would connect to ChatGPT API in production)
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    text: "That's a great question! Based on what you've described, this saree would look stunning with a contrasting blouse in a deep navy color. For accessories, consider gold jewelry with sapphire accents to complement the saree's embroidery.",
                    sender: 'ai'
                }
            ]);
        }, 1000);

        setInput('');
    };

    return (
        <div className="border rounded-lg shadow-sm p-4 bg-white h-[400px] flex flex-col">
            <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                <h3 className="text-lg font-medium">AI Stylist</h3>
            </div>

            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about styling..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
        </div>
    );
}

// Main Product Page Component
export default function ProductPage() {
    const params = useParams();
    const id = params && params.id ?
        (Array.isArray(params.id) ? params.id[0] : params.id) :
        '1'; // Default to '1' if params or params.id is null
    const [mintingStatus, setMintingStatus] = useState<'idle' | 'minting' | 'success' | 'error'>('idle');

    // Get product data based on ID
    const product = sareeData[id as keyof typeof sareeData] || sareeData['1'];

    const handleMintNFT = async () => {
        setMintingStatus('minting');

        // This would connect to Polygon/Thirdweb SDK in production
        // Simulating blockchain interaction
        setTimeout(() => {
            setMintingStatus('success');
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - 3D Model Viewer */}
                <div className="bg-slate-100 rounded-lg overflow-hidden shadow-md h-[500px] relative">
                    <Suspense fallback={<div className="flex h-full items-center justify-center">Loading 3D Model...</div>}>
                        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                            <SareeModel modelPath={product.modelPath} />
                            <OrbitControls enableZoom={true} enablePan={true} />
                            <Environment preset="city" />
                        </Canvas>
                    </Suspense>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                        <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                            View in AR
                        </Button>
                    </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <div className="flex items-center mt-2">
                            <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span className="ml-1 text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                        </div>
                        <p className="text-2xl font-bold mt-4 text-primary">{product.price}</p>
                    </div>

                    <p className="text-gray-700">{product.description}</p>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Material:</span>
                            <span className="font-medium">{product.material}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Color:</span>
                            <span className="font-medium">{product.color}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Weaver ID:</span>
                            <span className="font-medium">{product.weaverId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Dye Ingredients:</span>
                            <span className="font-medium">{product.dyeIngredients}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Drape Difficulty:</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-4 h-4 rounded-full mx-0.5 ${i < product.drapeDifficulty ? 'bg-primary' : 'bg-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <Button className="flex-1" variant="outline">
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Add to Cart
                        </Button>
                        <Button
                            className="flex-1"
                            onClick={handleMintNFT}
                            disabled={mintingStatus === 'minting'}
                        >
                            {mintingStatus === 'idle' && 'Mint NFT'}
                            {mintingStatus === 'minting' && 'Minting...'}
                            {mintingStatus === 'success' && 'NFT Minted!'}
                            {mintingStatus === 'error' && 'Error. Retry'}
                        </Button>
                    </div>

                    <div className="flex space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Truck className="h-4 w-4 mr-1" />
                            Fast Delivery
                        </div>
                        <div className="flex items-center">
                            <Shield className="h-4 w-4 mr-1" />
                            Quality Assurance
                        </div>
                        <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            Secure Payment
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-12" />

            {/* AI Stylist Chat Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-lg font-medium mb-4">Heritage & Craftsmanship</h3>
                            <p className="text-gray-700">
                                This exquisite piece showcases traditional techniques passed down through generations of skilled artisans.
                                The intricate patterns are created through a meticulous process involving hand-weaving on traditional looms,
                                taking several weeks to complete a single saree.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-medium mb-4">Blockchain Verification</h3>
                            <p className="text-gray-700">
                                When you mint the NFT for this saree, you receive a digital certificate of authenticity on the Polygon blockchain.
                                This verifies the provenance of the saree, details about the artisan who created it, and ensures you're
                                purchasing an authentic piece. The NFT serves as both proof of ownership and a digital twin of your physical saree.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-medium mb-4">Care Instructions</h3>
                            <p className="text-gray-700">
                                Dry clean only. Store in a cool, dry place away from direct sunlight. Roll the saree instead of folding
                                to prevent creases and damage to the fabric. If storing for long periods, wrap in a muslin cloth to protect
                                from dust and insects.
                            </p>
                        </Card>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-6">AI Stylist</h2>
                    <AIStyleChat />
                </div>
            </div>
        </div>
    );
} 