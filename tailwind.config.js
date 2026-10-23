/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Black + gold design tokens.
      colors: {
        bg: '#050505',
        'bg-alt': '#0B0B0B',
        surface: '#121212',
        border: {
          DEFAULT: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          bright: '#F5C542',
          soft: '#E7C873',
        },
        ink: {
          DEFAULT: '#F5F5F5',
          secondary: '#B8B8B8',
          muted: '#777777',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
