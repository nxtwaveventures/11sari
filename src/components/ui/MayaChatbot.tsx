'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

const initialMessages: Message[] = [
    {
        id: 1,
        text: "Hi, I'm Maya, your guide to wear what and when. I can suggest sarees based on occasions, festivals, astrological signs, and more! How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
    },
];

const suggestionOptions = [
    "What saree should I wear for a wedding?",
    "Suggest a saree based on my Zodiac sign",
    "Festival special saree recommendations",
    "Sarees for professional settings",
];

const MayaChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom of the chat
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        // Add user message
        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate API response delay
        setTimeout(() => {
            let botResponse: string;

            // Simple pattern matching responses
            const input = inputValue.toLowerCase();

            if (input.includes('wedding') || input.includes('marriage')) {
                botResponse = "For weddings, I recommend our silk Kanjeevaram or Banarasi sarees in vibrant colors like red, maroon, or gold. These are traditionally auspicious and make an elegant statement.";
            } else if (input.includes('zodiac') || input.includes('astrology') || input.includes('sign')) {
                botResponse = "Based on astrological considerations, I'd need to know your zodiac sign. Generally, fire signs (Aries, Leo, Sagittarius) look wonderful in reds and oranges, water signs (Cancer, Scorpio, Pisces) in blues and sea greens, air signs (Gemini, Libra, Aquarius) in pastels, and earth signs (Taurus, Virgo, Capricorn) in earthy tones like olive and brown.";
            } else if (input.includes('festival') || input.includes('diwali') || input.includes('navratri')) {
                botResponse = "For Indian festivals, color has significance. For Diwali, gold-accented sarees symbolize prosperity. For Navratri, specific colors are associated with each day. Would you like me to suggest sarees for a specific festival?";
            } else if (input.includes('office') || input.includes('work') || input.includes('professional')) {
                botResponse = "For professional settings, our cotton or linen sarees in subtle patterns and neutral colors work beautifully. They're elegant yet understated. Our digital collections include several options perfect for the workplace.";
            } else {
                botResponse = "Thanks for your question! I specialize in saree recommendations based on occasions, festivals, and astrological considerations. Would you like me to suggest sarees for any specific event or purpose?";
            }

            const botMessageObj: Message = {
                id: messages.length + 2,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessageObj]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setTimeout(() => {
            handleSendMessage();
        }, 100);
    };

    return (
        <>
            {/* Chatbot button */}
            <motion.button
                className="fixed bottom-6 right-6 bg-primary-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
            </motion.button>

            {/* Chatbot window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden z-50 flex flex-col"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                <span className="text-lg font-bold">M</span>
                            </div>
                            <div>
                                <h3 className="font-bold">Maya</h3>
                                <p className="text-xs opacity-80">Your Styling Guide</p>
                            </div>
                            <button
                                className="ml-auto text-white/80 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Chat messages */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                                            ? 'bg-primary-500 text-white rounded-tr-none'
                                            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm rounded-tl-none'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                        <p className="text-xs opacity-70 mt-1 text-right">
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestion chips */}
                        <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-x-auto flex gap-2">
                            {suggestionOptions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    className="whitespace-nowrap px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>

                        {/* Input area */}
                        <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center">
                            <input
                                type="text"
                                placeholder="Ask Maya about styling..."
                                className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button
                                className="ml-2 bg-primary-500 text-white rounded-full p-2 hover:bg-primary-600 transition-colors"
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                aria-label="Send message"
                            >
                                <FiSend size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MayaChatbot; 