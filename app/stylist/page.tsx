'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SareeSuggestion {
    id: string;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
}

interface Message {
    sender: 'ai' | 'user';
    text: string;
    bodyType?: string | null;
    image?: string;
}

export default function AIStylist() {
    // State for conversation
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'ai',
            text: 'Hello! I\'m your AI Stylist. I can help you find the perfect saree based on your body type, skin tone, and occasion. How can I assist you today?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState<SareeSuggestion[]>([]);
    const [showCamera, setShowCamera] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [bodyAnalysis, setBodyAnalysis] = useState<string | null>(null);

    // Ref for message container to auto-scroll
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Sample saree recommendations
    const sareeSuggestions = {
        'hourglass': [
            { id: 'kanch001', name: 'Royal Kanjivaram', type: 'Kanjivaram', description: 'Perfect for enhancing your hourglass figure with its structured draping.', imageUrl: '/images/kanch001_1.jpg' },
            { id: 'bnrs002', name: 'Golden Banarasi', type: 'Banarasi', description: 'Heavy borders accentuate your curves beautifully.', imageUrl: '/images/bnrs002_1.jpg' },
        ],
        'pear': [
            { id: 'chnd003', name: 'Azure Chanderi', type: 'Chanderi', description: 'Lightweight fabric that creates balance with your body shape.', imageUrl: '/images/chnd003_1.jpg' },
            { id: 'bnrs005', name: 'Ruby Banarasi', type: 'Banarasi', description: 'The structured pallu draws attention upward, creating balance.', imageUrl: '/images/bnrs002_1.jpg' },
        ],
        'apple': [
            { id: 'chnd006', name: 'Sapphire Chanderi', type: 'Chanderi', description: 'Fluid drape that skims over the midsection elegantly.', imageUrl: '/images/chnd003_1.jpg' },
            { id: 'kanch007', name: 'Pearl Kanjivaram', type: 'Kanjivaram', description: 'Vertical patterns elongate your silhouette beautifully.', imageUrl: '/images/kanch001_1.jpg' },
        ],
        'rectangle': [
            { id: 'bnrs008', name: 'Coral Banarasi', type: 'Banarasi', description: 'Creates the illusion of curves with its rich texture and weight.', imageUrl: '/images/bnrs002_1.jpg' },
            { id: 'chnd009', name: 'Teal Chanderi', type: 'Chanderi', description: 'The contrast border adds dimension to your frame.', imageUrl: '/images/chnd003_1.jpg' },
        ]
    };

    // Auto-scroll to bottom when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Function to simulate AI response
    const generateResponse = (userMessage) => {
        setIsTyping(true);

        // Simple keyword matching for demonstration
        const lowerCaseMessage = userMessage.toLowerCase();
        setTimeout(() => {
            let response;
            let bodyType = null;
            let newSuggestions = [];

            if (lowerCaseMessage.includes('body type') || lowerCaseMessage.includes('shape')) {
                response = 'I can help you identify your body type. Would you like to upload a photo for analysis, or would you prefer to answer a few questions about your measurements?';
            } else if (lowerCaseMessage.includes('upload') || lowerCaseMessage.includes('photo')) {
                response = 'Great! You can upload a photo for analysis by clicking the camera button below.';
                setShowCamera(true);
            } else if (lowerCaseMessage.includes('hourglass')) {
                bodyType = 'hourglass';
                response = 'With your hourglass figure, you look stunning in sarees that accentuate your balanced proportions. I recommend sarees with defined borders that highlight your curves. Here are some recommendations:';
                newSuggestions = sareeSuggestions.hourglass;
            } else if (lowerCaseMessage.includes('pear') || lowerCaseMessage.includes('triangle')) {
                bodyType = 'pear';
                response = 'For your pear-shaped body, I recommend sarees that draw attention to your upper body while flowing elegantly over your hips. Consider these options:';
                newSuggestions = sareeSuggestions.pear;
            } else if (lowerCaseMessage.includes('apple') || lowerCaseMessage.includes('round')) {
                bodyType = 'apple';
                response = 'For your apple-shaped body, look for sarees that create a lengthening effect and skim smoothly over the midsection. These would be perfect for you:';
                newSuggestions = sareeSuggestions.apple;
            } else if (lowerCaseMessage.includes('rectangle') || lowerCaseMessage.includes('straight')) {
                bodyType = 'rectangle';
                response = 'With your rectangle body shape, choose sarees that create the illusion of curves with textures and patterns. Here are my recommendations:';
                newSuggestions = sareeSuggestions.rectangle;
            } else if (lowerCaseMessage.includes('occasion') || lowerCaseMessage.includes('wedding') || lowerCaseMessage.includes('party') || lowerCaseMessage.includes('event')) {
                response = 'For special occasions, consider the formality of the event. For weddings and formal events, a silk Kanjivaram or Banarasi would be stunning. For casual gatherings, a lightweight Chanderi would be comfortable yet elegant.';
            } else if (lowerCaseMessage.includes('color') || lowerCaseMessage.includes('fair') || lowerCaseMessage.includes('dark') || lowerCaseMessage.includes('medium') || lowerCaseMessage.includes('skin')) {
                response = 'Color selection based on skin tone is important. For fair skin, jewel tones like emerald green and royal blue look stunning. For medium skin tones, earthy colors like mustard and rust are flattering. For deeper skin tones, bright colors like fuchsia and orange create a beautiful contrast.';
            } else if (uploadedImage && !bodyAnalysis) {
                // Simulate AI analysis of uploaded image
                const randomBodyTypes = ['hourglass', 'pear', 'apple', 'rectangle'];
                const analyzedType = randomBodyTypes[Math.floor(Math.random() * randomBodyTypes.length)];
                setBodyAnalysis(analyzedType);

                bodyType = analyzedType;
                response = `Based on my analysis, you appear to have a ${analyzedType} body shape. Here are some saree recommendations that would complement your figure beautifully:`;
                newSuggestions = sareeSuggestions[analyzedType];
            } else {
                response = 'Feel free to ask me about finding the right saree for your body type, skin tone, or occasion. You can also upload a photo for personalized recommendations.';
            }

            setMessages(prev => [...prev, { sender: 'ai', text: response, bodyType }]);
            setSuggestions(newSuggestions);
            setIsTyping(false);
        }, 1500);
    };

    // Handle sending messages
    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { sender: 'user', text: input }]);

        // Generate AI response
        generateResponse(input);

        // Clear input field
        setInput('');
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result);
                setMessages(prev => [...prev, {
                    sender: 'user',
                    text: 'I\'ve uploaded a photo for analysis.',
                    image: reader.result
                }]);

                generateResponse('analyze my photo');
            };
            reader.readAsDataURL(file);
        }
    };

    // Ocean and sunrise animation effects
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
        size: Math.floor(Math.random() * 40) + 10,
        delay: Math.random() * 10,
        left: `${Math.random() * 100}%`,
    }));

    return (
        <div className="min-h-screen bg-gradient-to-b from-sunrise-100 to-ocean-100 flex flex-col">
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

            <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col flex-1">
                {/* Header */}
                <header className="flex justify-between items-center mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <Link href="/">
                        <div className="text-3xl font-bold bg-gradient-to-r from-sunrise-500 to-sunrise-700 text-transparent bg-clip-text">11Sari.com</div>
                    </Link>
                    <nav className="flex gap-6">
                        <Link href="/collection" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Collection</Link>
                        <Link href="/about" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Our Story</Link>
                        <Link href="/blockchain" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Blockchain</Link>
                        <Link href="/account" className="text-ocean-800 hover:text-sunrise-500 transition-colors">My Account</Link>
                    </nav>
                </header>

                {/* Page Title */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-sunrise-800 mb-4">AI Stylist</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Get personalized saree recommendations based on your body type, skin tone, and occasion preferences.
                    </p>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-6">
                    {/* Chat Section */}
                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex flex-col">
                        {/* Chat Messages */}
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] rounded-xl p-4 ${message.sender === 'user'
                                            ? 'bg-sunrise-100 text-gray-800'
                                            : 'bg-ocean-100 text-gray-800'
                                            }`}>
                                            {/* Display image if present */}
                                            {message.image && (
                                                <div className="mb-3">
                                                    <img src={message.image} alt="Uploaded" className="w-full h-auto rounded-lg max-h-64 object-cover" />
                                                </div>
                                            )}
                                            <p>{message.text}</p>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-ocean-100 text-gray-800 rounded-xl p-4 max-w-[80%]">
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse"></div>
                                                <div className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-gray-200 p-4 bg-white">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => document.getElementById('image-upload').click()}
                                    className="p-2 text-ocean-600 hover:bg-ocean-50 rounded-full transition-colors"
                                    title="Upload photo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about your body type, skin tone, or occasion..."
                                    className="flex-1 border rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-sunrise-600 text-white px-6 py-3 rounded-r-lg hover:bg-sunrise-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recommendations Section - Only show when there are suggestions */}
                    {suggestions.length > 0 && (
                        <div className="md:w-96 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
                            <h2 className="text-xl font-bold mb-4 text-sunrise-700">Recommended Sarees</h2>
                            <div className="space-y-4">
                                {suggestions.map((saree, index) => (
                                    <Link href={`/product/${saree.id}`} key={index} className="block group">
                                        <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="h-48 bg-gradient-to-br from-ocean-200 to-sunrise-200 relative">
                                                {/* Placeholder for saree image */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-lg font-medium text-gray-800">{saree.name}</span>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold group-hover:text-sunrise-600 transition-colors">{saree.name}</h3>
                                                <span className="inline-block bg-ocean-100 text-ocean-800 rounded px-2 py-1 text-xs font-medium mb-2">
                                                    {saree.type}
                                                </span>
                                                <p className="text-gray-600 text-sm">{saree.description}</p>
                                                <div className="mt-2 text-ocean-600 text-sm font-medium group-hover:text-ocean-800">
                                                    View Details →
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Suggestion Buttons */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    <button
                        onClick={() => {
                            setInput('What saree suits my hourglass body shape?');
                            handleSend();
                        }}
                        className="bg-white/90 hover:bg-white text-ocean-800 px-4 py-2 rounded-full shadow hover:shadow-md transition-all"
                    >
                        Hourglass body type
                    </button>
                    <button
                        onClick={() => {
                            setInput('What colors suit my fair skin tone?');
                            handleSend();
                        }}
                        className="bg-white/90 hover:bg-white text-ocean-800 px-4 py-2 rounded-full shadow hover:shadow-md transition-all"
                    >
                        Fair skin tone
                    </button>
                    <button
                        onClick={() => {
                            setInput('Recommend sarees for a wedding');
                            handleSend();
                        }}
                        className="bg-white/90 hover:bg-white text-ocean-800 px-4 py-2 rounded-full shadow hover:shadow-md transition-all"
                    >
                        Wedding occasion
                    </button>
                    <button
                        onClick={() => {
                            setInput('I want to upload a photo for analysis');
                            handleSend();
                        }}
                        className="bg-white/90 hover:bg-white text-ocean-800 px-4 py-2 rounded-full shadow hover:shadow-md transition-all"
                    >
                        Upload photo
                    </button>
                </div>
            </div>
        </div>
    );
} 