'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiUser } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Digital Sarees', path: '/digital-sarees' },
    { name: 'Weavers Portal', path: '/weavers-portal' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

                {/* CTA and Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    <Link href="/digital-sarees" className="hidden sm:block">
                        <button className="btn-primary text-sm">
                            Reserve a Saree
                        </button>
                    </Link>

                    <button
                        className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4"
                >
                    <div className="container mx-auto px-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`block py-2 px-4 rounded-md ${pathname === link.path
                                        ? 'bg-primary-50 text-primary-500'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/digital-sarees"
                            className="block py-2 px-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <button className="btn-primary w-full">
                                Reserve a Saree
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header; 