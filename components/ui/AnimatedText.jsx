'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
    text,
    className = "",
    once = false,
    speed = 0.05,
    staggerChildren = 0.03,
    delay = 0,
    type = "letter" // Options: "letter", "word", or "text"
}) => {
    const [inView, setInView] = useState(false);

    // Reset animation when text changes
    useEffect(() => {
        if (!once) setInView(false);
    }, [text, once]);

    // Framer motion variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delay,
                ease: "easeInOut",
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    // Split text into array of letters or words
    const items = type === "word"
        ? text.split(" ")
        : type === "letter"
            ? Array.from(text)
            : [text];

    return (
        <motion.div
            className={`overflow-hidden inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate={once && !inView ? "hidden" : "visible"}
            whileInView={once ? "visible" : undefined}
            viewport={once ? { once: true, amount: 0.3 } : undefined}
            onAnimationComplete={() => setInView(true)}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className={`inline-block ${type === "word" ? "mr-1.5" : ""}`}
                    style={{
                        display: "inline-block",
                        whiteSpace: type === "letter" ? "pre" : "normal"
                    }}
                >
                    {item}
                    {type === "word" && index !== items.length - 1 ? " " : ""}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText; 