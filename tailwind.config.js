/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Custom color palette
                'blood-red': {
                    DEFAULT: 'hsl(354, 70%, 40%)',
                    light: 'hsl(354, 70%, 50%)',
                    dark: 'hsl(354, 80%, 30%)',
                },
                'ocean': {
                    DEFAULT: 'hsl(196, 64%, 30%)',
                    light: 'hsl(190, 70%, 60%)',
                    lighter: 'hsl(190, 70%, 80%)',
                },
                'sunrise': {
                    coral: 'hsl(15, 80%, 80%)',
                    peach: 'hsl(25, 100%, 85%)',
                },
                'pastel': {
                    pink: 'hsl(350, 70%, 90%)',
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundImage: {
                'sunrise-gradient': 'linear-gradient(135deg, hsl(25, 100%, 85%) 0%, hsl(15, 80%, 80%) 50%, hsl(354, 70%, 40%) 100%)',
                'ocean-gradient': 'linear-gradient(135deg, hsl(196, 64%, 30%) 0%, hsl(190, 70%, 60%) 50%, hsl(190, 70%, 80%) 100%)',
                'pastel-gradient': 'linear-gradient(135deg, hsl(350, 70%, 90%) 0%, hsl(25, 100%, 85%) 50%, hsl(190, 70%, 80%) 100%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}; 