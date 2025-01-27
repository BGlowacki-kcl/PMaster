module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Adjust paths if needed
    theme: {
        extend: {
        colors: {
            primary: '#1D4ED8', // Example: custom blue
            secondary: '#9333EA', // Example: custom purple
            accent: '#FACC15', // Example: custom yellow
            background: '#F3F4F6', // Example: light gray
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // Example: Inter as default sans-serif
            serif: ['Merriweather', 'serif'], // Example: Merriweather as default serif
        },
        },
    },
    plugins: [],
};
