/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                black: "#000000",
                gray: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827",
                },
                primary: {
                    50: "#fff9f6",
                    100: "#ffe8e0",
                    200: "#ffd0c2",
                    300: "#ffb3a0",
                    400: "#ff967e",
                    500: "#ff7a5c", // peach
                    600: "#e65c40",
                    700: "#cc4026",
                    800: "#b22a12",
                    900: "#991400",
                },
                secondary: {
                    50: "#fef5f7",
                    100: "#fee6ec",
                    200: "#ffccd8",
                    300: "#ffadc0",
                    400: "#ff8ea8",
                    500: "#ff6f91", // blush pink
                    600: "#e64d72",
                    700: "#cc2f56",
                    800: "#b21642",
                    900: "#990032",
                },
                accent: {
                    50: "#f8f7ff",
                    100: "#f0edff",
                    200: "#e0dbff",
                    300: "#d0c8ff",
                    400: "#c1b6ff",
                    500: "#b1a3ff", // lavender
                    600: "#9380e6",
                    700: "#775fcc",
                    800: "#5c42b3",
                    900: "#422899",
                },
                gold: {
                    50: "#fefdf5",
                    100: "#fdf8d9",
                    200: "#faf0ad",
                    300: "#f7e77f",
                    400: "#f4df51",
                    500: "#f1d723", // gold
                    600: "#d8b915",
                    700: "#bf9c08",
                    800: "#a68000",
                    900: "#8d6400",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}; 