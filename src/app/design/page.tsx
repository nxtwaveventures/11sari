'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample data - replace with your actual patterns
const sareeTypes = [
    { name: 'Banarasi', description: 'Luxurious silk with intricate zari work and Mughal-inspired motifs' },
    { name: 'Kanjivaram', description: 'Pure silk with temple motifs and traditional borders' },
    { name: 'Chanderi', description: 'Light and elegant with gold/silver motifs, perfect for summer' },
    { name: 'Paithani', description: 'Maharashtrian heritage with peacock motifs and traditional borders' },
    { name: 'Dhalapathara', description: 'Odisha\'s traditional white stone-inspired designs' },
    { name: 'Ajrakh', description: 'Traditional block-printed patterns from Kutch' },
    { name: 'Pochampally', description: 'Telangana\'s famous Ikat weave with geometric patterns and vibrant colors' },
];

const fabricTypes = [
    { name: 'Pure Silk', description: 'Traditional and luxurious' },
    { name: 'Cotton Silk', description: 'Comfortable and versatile' },
    { name: 'Tussar Silk', description: 'Rich texture and natural sheen' },
    { name: 'Kora Silk', description: 'Light and crisp texture' },
    { name: 'Matka Silk', description: 'Coarse texture with natural look' },
    { name: 'Raw Silk', description: 'Natural texture with rustic appeal' },
    { name: 'Ikat Silk', description: 'Traditional tie and dye technique from Telangana' },
];

const bodyPatterns = [
    { name: 'Buta', image: '/patterns/buta.png', description: 'Traditional paisley motif symbolizing life and eternity' },
    { name: 'Peacock', image: '/patterns/peacock.png', description: 'Majestic peacock motifs representing grace and beauty' },
    { name: 'Temple', image: '/patterns/temple.png', description: 'Intricate temple architecture-inspired patterns' },
    { name: 'Floral', image: '/patterns/floral.png', description: 'Delicate flower motifs inspired by Indian gardens' },
    { name: 'Geometric', image: '/patterns/geometric.png', description: 'Traditional geometric patterns from tribal art' },
    { name: 'Kalka', image: '/patterns/kalka.png', description: 'Classic mango motif symbolizing fertility' },
    { name: 'Swirl', image: '/patterns/swirl.png', description: 'Flowing swirl patterns inspired by nature' },
    { name: 'Tribal', image: '/patterns/tribal.png', description: 'Authentic tribal motifs from Indian heritage' },
    { name: 'Ikat Diamond', image: '/patterns/ikat-diamond.png', description: 'Classic Pochampally diamond pattern' },
    { name: 'Ikat Chevron', image: '/patterns/ikat-chevron.png', description: 'Traditional Ikat zigzag pattern' },
];

const borderStyles = [
    { name: 'Zari', image: '/borders/zari.png', description: 'Classic gold/silver border with intricate patterns' },
    { name: 'Temple', image: '/borders/temple.png', description: 'Temple architecture-inspired border designs' },
    { name: 'Minimal', image: '/borders/minimal.png', description: 'Subtle and elegant traditional patterns' },
    { name: 'Double Border', image: '/borders/double.png', description: 'Two-tone border with contrasting patterns' },
    { name: 'Tribal', image: '/borders/tribal.png', description: 'Traditional tribal border patterns' },
    { name: 'Peacock', image: '/borders/peacock.png', description: 'Majestic peacock border design' },
    { name: 'Floral', image: '/borders/floral.png', description: 'Delicate flower border patterns' },
];

const palluDesigns = [
    { name: 'Peacock', image: '/pallu/peacock.png', description: 'Graceful peacock motifs in traditional style' },
    { name: 'Temple', image: '/pallu/temple.png', description: 'Intricate temple architecture design' },
    { name: 'Tribal', image: '/pallu/tribal.png', description: 'Authentic tribal patterns from Indian heritage' },
    { name: 'Floral', image: '/pallu/floral.png', description: 'Traditional flower patterns' },
    { name: 'Geometric', image: '/pallu/geometric.png', description: 'Classic geometric patterns' },
    { name: 'Buta', image: '/pallu/buta.png', description: 'Traditional paisley motifs' },
];

const colorOptions = [
    { name: 'Deep Red', hex: '#8B0000', description: 'Traditional bridal red' },
    { name: 'Forest Green', hex: '#228B22', description: 'Nature-inspired green' },
    { name: 'Royal Blue', hex: '#4169E1', description: 'Regal blue shade' },
    { name: 'Maroon', hex: '#800000', description: 'Rich maroon' },
    { name: 'Gold', hex: '#FFD700', description: 'Luxurious gold' },
    { name: 'Ivory', hex: '#FFFFF0', description: 'Pure ivory' },
    { name: 'Burgundy', hex: '#800020', description: 'Deep burgundy' },
    { name: 'Emerald', hex: '#50C878', description: 'Vibrant emerald' },
    { name: 'Navy', hex: '#000080', description: 'Classic navy' },
    { name: 'Teal', hex: '#008080', description: 'Modern teal' },
    { name: 'Silver', hex: '#C0C0C0', description: 'Elegant silver' },
    { name: 'Purple', hex: '#800080', description: 'Royal purple' },
];

interface SavedDesign {
    id: string;
    name: string;
    sareeType: string;
    fabricType: string;
    bodyPattern: string;
    borderStyle: string;
    palluDesign: string;
    mainColor: string;
    borderColor: string;
    palluColor: string;
    createdAt: string;
}

interface SareeVariation {
    id: string;
    image: string;
    description: string;
}

export default function DesignPage() {
    const [step, setStep] = useState(1);
    const [sareeType, setSareeType] = useState('');
    const [fabricType, setFabricType] = useState('');
    const [bodyPattern, setBodyPattern] = useState('');
    const [borderStyle, setBorderStyle] = useState('');
    const [palluDesign, setPalluDesign] = useState('');
    const [mainColor, setMainColor] = useState('');
    const [borderColor, setBorderColor] = useState('');
    const [palluColor, setPalluColor] = useState('');
    const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [designName, setDesignName] = useState('');
    const [selectedVariation, setSelectedVariation] = useState<string>('');
    const [showPreview, setShowPreview] = useState(false);

    // Load saved designs from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedDesigns');
        if (saved) {
            setSavedDesigns(JSON.parse(saved));
        }
    }, []);

    // Save designs to localStorage
    useEffect(() => {
        localStorage.setItem('savedDesigns', JSON.stringify(savedDesigns));
    }, [savedDesigns]);

    const saveDesign = () => {
        if (!designName) return;

        const newDesign = {
            id: Date.now().toString(),
            name: designName,
            sareeType,
            fabricType,
            bodyPattern,
            borderStyle,
            palluDesign,
            mainColor,
            borderColor,
            palluColor,
            createdAt: new Date().toISOString()
        };

        setSavedDesigns([...savedDesigns, newDesign]);
        setShowSaveModal(false);
        setDesignName('');
    };

    const loadDesign = (design: SavedDesign) => {
        setSareeType(design.sareeType);
        setFabricType(design.fabricType);
        setBodyPattern(design.bodyPattern);
        setBorderStyle(design.borderStyle);
        setPalluDesign(design.palluDesign);
        setMainColor(design.mainColor);
        setBorderColor(design.borderColor);
        setPalluColor(design.palluColor);
        setStep(7); // Go to review step
    };

    const generateVariations = (): SareeVariation[] => {
        return [
            {
                id: 'v1',
                image: '/variations/v1.jpg',
                description: 'Traditional interpretation with classic motifs'
            },
            {
                id: 'v2',
                image: '/variations/v2.jpg',
                description: 'Balanced design with moderate detailing'
            },
            {
                id: 'v3',
                image: '/variations/v3.jpg',
                description: 'Artistic interpretation with creative elements'
            }
        ];
    };

    const renderColorPicker = (
        selectedColor: string,
        setColor: (color: string) => void,
        label: string
    ) => (
        <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">{label}</h3>
            <div className="grid grid-cols-4 gap-3">
                {colorOptions.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setColor(color.name)}
                        className={`p-2 rounded-lg border-2 transition-all ${selectedColor === color.name
                            ? 'border-primary-500'
                            : 'border-gray-200 hover:border-primary-300'
                            }`}
                    >
                        <div
                            className="w-full h-12 rounded-md mb-1"
                            style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-sm font-medium">{color.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderPreview = () => {
        return (
            <motion.div
                className="fixed top-1/2 right-8 transform -translate-y-1/2 w-96 h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative w-full h-full">
                    {/* Main color background */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: colorOptions.find(c => c.name === mainColor)?.hex || '#ffffff' }}
                    />

                    {/* Border color */}
                    <div
                        className="absolute inset-y-0 left-0 w-8"
                        style={{ backgroundColor: colorOptions.find(c => c.name === borderColor)?.hex || '#ffffff' }}
                    />

                    {/* Pallu color */}
                    <div
                        className="absolute inset-y-0 right-0 w-24"
                        style={{ backgroundColor: colorOptions.find(c => c.name === palluColor)?.hex || '#ffffff' }}
                    />

                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src={bodyPatterns.find(p => p.name === bodyPattern)?.image || ''}
                            alt="Pattern"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 border-8 border-white/20 rounded-xl" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-white text-sm font-medium">Your Custom Design</p>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Design Your Dream Saree</h1>
                        <p className="text-gray-600">Create your unique saree with our easy-to-use designer</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                                <div
                                    key={s}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${s <= step ? 'bg-primary-500 text-white' : 'bg-gray-200'
                                        }`}
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-primary-500 rounded-full transition-all duration-300"
                                style={{ width: `${((step - 1) / 6) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Design Steps */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Choose Saree Type</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {sareeTypes.map((type) => (
                                        <button
                                            key={type.name}
                                            onClick={() => setSareeType(type.name)}
                                            className={`p-4 rounded-xl border-2 transition-all ${sareeType === type.name
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                                }`}
                                        >
                                            <div className="font-medium">{type.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{type.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Select Fabric Type</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {fabricTypes.map((fabric) => (
                                        <button
                                            key={fabric.name}
                                            onClick={() => setFabricType(fabric.name)}
                                            className={`p-4 rounded-xl border-2 transition-all ${fabricType === fabric.name
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                                }`}
                                        >
                                            <div className="font-medium">{fabric.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{fabric.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Select Body Pattern</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {bodyPatterns.map((pattern) => (
                                        <button
                                            key={pattern.name}
                                            onClick={() => setBodyPattern(pattern.name)}
                                            className={`p-4 rounded-xl border-2 transition-all ${bodyPattern === pattern.name
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                                }`}
                                        >
                                            <div className="font-medium">{pattern.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{pattern.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Select Border Style</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {borderStyles.map((border) => (
                                        <button
                                            key={border.name}
                                            onClick={() => setBorderStyle(border.name)}
                                            className={`p-4 rounded-xl border-2 transition-all ${borderStyle === border.name
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                                }`}
                                        >
                                            <div className="font-medium">{border.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{border.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Select Pallu Design</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {palluDesigns.map((pallu) => (
                                        <button
                                            key={pallu.name}
                                            onClick={() => setPalluDesign(pallu.name)}
                                            className={`p-4 rounded-xl border-2 transition-all ${palluDesign === pallu.name
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                                }`}
                                        >
                                            <div className="font-medium">{pallu.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{pallu.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 6 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6">Choose Colors</h2>
                                {renderColorPicker(mainColor, setMainColor, 'Main Color')}
                                {renderColorPicker(borderColor, setBorderColor, 'Border Color')}
                                {renderColorPicker(palluColor, setPalluColor, 'Pallu Color')}
                            </motion.div>
                        )}

                        {step === 7 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="relative"
                            >
                                <h2 className="text-2xl font-semibold mb-6">Review Your Design</h2>

                                {/* Design Summary */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Saree Type:</span>
                                            <span className="font-medium">{sareeType}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Fabric:</span>
                                            <span className="font-medium">{fabricType}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Body Pattern:</span>
                                            <span className="font-medium">{bodyPattern}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Border Style:</span>
                                            <span className="font-medium">{borderStyle}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Pallu Design:</span>
                                            <span className="font-medium">{palluDesign}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Main Color:</span>
                                            <span className="font-medium">{mainColor}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Border Color:</span>
                                            <span className="font-medium">{borderColor}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Pallu Color:</span>
                                            <span className="font-medium">{palluColor}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Variations Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4">Choose Your Preferred Interpretation</h3>
                                    <p className="text-gray-600 mb-4">
                                        Our master weavers will create your saree based on your design choices.
                                        Select the style that best matches your vision.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {generateVariations().map((variation) => (
                                            <div
                                                key={variation.id}
                                                className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer
                                                    ${selectedVariation === variation.id
                                                        ? 'border-primary-500 shadow-lg'
                                                        : 'border-gray-200 hover:border-primary-300'}`}
                                                onClick={() => setSelectedVariation(variation.id)}
                                            >
                                                <div className="aspect-w-3 aspect-h-4 relative">
                                                    <Image
                                                        src={variation.image}
                                                        alt={variation.description}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-t-xl"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <p className="text-sm text-gray-600">{variation.description}</p>
                                                </div>
                                                {selectedVariation === variation.id && (
                                                    <div className="absolute top-2 right-2">
                                                        <div className="bg-primary-500 text-white rounded-full p-1">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Surprise Preview Button */}
                                <motion.div
                                    className="text-center mb-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <button
                                        onClick={() => setShowPreview(true)}
                                        className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                                    >
                                        <span>Preview Your Design</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </motion.div>

                                {/* Show preview when button is clicked */}
                                {showPreview && renderPreview()}
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
                                >
                                    Back
                                </button>
                            )}
                            {step < 7 ? (
                                <button
                                    onClick={() => setStep(step + 1)}
                                    className="ml-auto px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                >
                                    Next
                                </button>
                            ) : (
                                <div className="ml-auto space-x-4">
                                    <button
                                        onClick={() => setShowSaveModal(true)}
                                        className="px-6 py-2 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
                                    >
                                        Save Design
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (!selectedVariation) {
                                                alert('Please select a variation before placing your order');
                                                return;
                                            }
                                            alert('Order placed!');
                                        }}
                                        className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Saved Designs */}
                    {savedDesigns.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Your Saved Designs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {savedDesigns.map((design) => (
                                    <div
                                        key={design.id}
                                        className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <h4 className="font-medium">{design.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {design.sareeType}
                                        </p>
                                        <button
                                            onClick={() => loadDesign(design)}
                                            className="mt-2 text-primary-500 hover:text-primary-600"
                                        >
                                            Load Design
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Save Design Modal */}
            {showSaveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 w-96">
                        <h3 className="text-xl font-semibold mb-4">Save Your Design</h3>
                        <input
                            type="text"
                            value={designName}
                            onChange={(e) => setDesignName(e.target.value)}
                            placeholder="Enter design name"
                            className="w-full p-2 border rounded-lg mb-4"
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowSaveModal(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveDesign}
                                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
} 