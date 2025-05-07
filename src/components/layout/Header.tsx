'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch, FiHeart } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Design', path: '/design' },
    { name: 'About', path: '/about' },
    { name: 'Verify Saree', path: '/verify' }
];

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when path changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold gradient-text"
                        >
                            11Sari
                        </motion.div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`relative text-sm font-medium transition-colors hover:text-primary-500 ${pathname === link.path
                                ? 'text-primary-500'
                                : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {link.name}
                            {pathname === link.path && (
                                <motion.div
                                    layoutId="activeNavIndicator"
                                    className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-primary-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Right side icons and Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    {/* Desktop icons */}
                    <div className="hidden sm:flex items-center space-x-3">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <FiSearch className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors" />
                        </button>

                        <Link href="/favorites">
                            <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
                                <FiHeart className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors" />
                                <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </div>
                        </Link>

                        <Link href="/cart">
                            <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
                                <FiShoppingBag className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors" />
                                <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </div>
                        </Link>
                    </div>

                    <Link href="/shop" className="hidden sm:block">
                        <motion.button
                            className="btn-primary text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Reserve Now
                        </motion.button>
                    </Link>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Search bar */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                    >
                        <div className="container mx-auto px-4 py-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for sarees, weavers, or collections..."
                                    className="w-full py-2 px-4 pr-10 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                                    autoFocus
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <FiSearch className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4 divide-y divide-gray-100 dark:divide-gray-800">
                            <div className="pb-4 flex justify-between items-center">
                                <div className="flex gap-4">
                                    <Link href="/account">
                                        <div className="flex flex-col items-center justify-center p-2">
                                            <FiUser className="text-gray-700 dark:text-gray-300 mb-1" />
                                            <span className="text-xs">Account</span>
                                        </div>
                                    </Link>

                                    <Link href="/favorites">
                                        <div className="flex flex-col items-center justify-center p-2 relative">
                                            <FiHeart className="text-gray-700 dark:text-gray-300 mb-1" />
                                            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                                2
                                            </span>
                                            <span className="text-xs">Wishlist</span>
                                        </div>
                                    </Link>

                                    <Link href="/cart">
                                        <div className="flex flex-col items-center justify-center p-2 relative">
                                            <FiShoppingBag className="text-gray-700 dark:text-gray-300 mb-1" />
                                            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                                0
                                            </span>
                                            <span className="text-xs">Cart</span>
                                        </div>
                                    </Link>
                                </div>

                                <button
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    className="p-2 text-gray-700 dark:text-gray-300"
                                >
                                    <FiSearch size={20} />
                                </button>
                            </div>

                            <nav className="py-4 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`block py-2 px-4 rounded-md ${pathname === link.path
                                            ? 'bg-primary-50 text-primary-500 dark:bg-gray-800'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-4">
                                <Link
                                    href="/shop"
                                    className="block py-2 px-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <button className="btn-primary w-full">
                                        Reserve Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header; 