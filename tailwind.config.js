/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                // Sunrise colors
                sunrise: {
                    100: '#FFF1E6', // Light peach
                    200: '#FFCEB4', // Peach
                    300: '#FF9E7A', // Light coral
                    400: '#FF7D59', // Coral
                    500: '#FF5733', // Orange
                    600: '#E64D29', // Dark orange
                    700: '#B93A1F', // Burnt orange
                    800: '#8C2E17', // Deep burnt orange
                    900: '#5A1F10', // Blood red
                },
                // Ocean colors
                ocean: {
                    100: '#E0F7FA', // Light cyan
                    200: '#B2EBF2', // Cyan
                    300: '#80DEEA', // Light turquoise
                    400: '#4DD0E1', // Turquoise
                    500: '#26C6DA', // Sea green
                    600: '#00ACC1', // Medium sea green
                    700: '#0097A7', // Deep sea green
                    800: '#00838F', // Deep teal
                    900: '#006064', // Dark teal
                },
            },
            animation: {
                'wave': 'wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
                'bubble-small': 'bubble 5s ease-in-out infinite',
                'bubble-medium': 'bubble 7s ease-in-out infinite',
                'bubble-large': 'bubble 9s ease-in-out infinite',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-25px)' },
                },
                bubble: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '50%': { opacity: '0.8' },
                    '100%': { transform: 'translateY(-100%)', opacity: '0' },
                }
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}; 