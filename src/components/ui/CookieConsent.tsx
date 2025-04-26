'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiSettings, FiShield } from 'react-icons/fi';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        setPreferences({
            necessary: true,
            analytics: true,
            marketing: true,
        });
        localStorage.setItem('cookieConsent', JSON.stringify({
            necessary: true,
            analytics: true,
            marketing: true,
        }));
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setIsVisible(false);
        setShowSettings(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                                        <FiShield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Cookie Preferences
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            We use cookies to enhance your browsing experience
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <FiX className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {!showSettings ? (
                                <div className="space-y-4">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleAcceptAll}
                                            className="btn-primary flex-1 flex items-center justify-center space-x-2"
                                        >
                                            <FiCheck className="w-4 h-4" />
                                            <span>Accept All</span>
                                        </button>
                                        <button
                                            onClick={() => setShowSettings(true)}
                                            className="btn-secondary flex-1 flex items-center justify-center space-x-2"
                                        >
                                            <FiSettings className="w-4 h-4" />
                                            <span>Customize</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">Necessary Cookies</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Required for the website to function properly</p>
                                            </div>
                                            <div className="relative inline-block w-12 h-6">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.necessary}
                                                    onChange={(e) => setPreferences({ ...preferences, necessary: e.target.checked })}
                                                    className="sr-only"
                                                    disabled
                                                />
                                                <div className="w-12 h-6 bg-primary-600 rounded-full cursor-not-allowed opacity-50"></div>
                                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Help us understand how visitors interact with our website</p>
                                            </div>
                                            <div className="relative inline-block w-12 h-6">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.analytics}
                                                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-primary-600 transition-colors"></div>
                                                <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-6' : ''}`}></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">Marketing Cookies</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Used to track visitors across websites for marketing purposes</p>
                                            </div>
                                            <div className="relative inline-block w-12 h-6">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.marketing}
                                                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-primary-600 transition-colors"></div>
                                                <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-6' : ''}`}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleSavePreferences}
                                            className="btn-primary flex-1"
                                        >
                                            Save Preferences
                                        </button>
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="btn-secondary flex-1"
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CookieConsent; 