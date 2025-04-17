'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = ({
    children,
    onClick,
    href,
    className = '',
    variant = 'primary',
    size = 'md',
    disabled = false,
    fullWidth = false,
    rightIcon,
    leftIcon,
    animated = true,
    type = 'button',
    ariaLabel,
}) => {
    // Define variant classes
    const variantClasses = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-white text-primary border border-primary hover:bg-gray-50',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-primary hover:bg-gray-100',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    // Define size classes
    const sizeClasses = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-6 text-base',
        lg: 'py-3 px-8 text-lg',
    };

    const baseClasses = `
    inline-flex items-center justify-center 
    rounded-md font-medium transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
  `;

    const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${className}
  `;

    const content = (
        <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} aria-label={ariaLabel}>
                {animated ? (
                    <motion.a
                        className={buttonClasses}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        aria-disabled={disabled}
                    >
                        {content}
                    </motion.a>
                ) : (
                    <a className={buttonClasses} aria-disabled={disabled}>
                        {content}
                    </a>
                )}
            </Link>
        );
    }

    return animated ? (
        <motion.button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.03 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            aria-label={ariaLabel}
        >
            {content}
        </motion.button>
    ) : (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {content}
        </button>
    );
};

export default Button; 