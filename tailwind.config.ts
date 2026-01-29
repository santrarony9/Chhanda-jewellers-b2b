import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Deeper black
        foreground: "#FAFAFA",
        primary: {
          DEFAULT: "#D4AF37", // Metallic Gold
          light: "#F3E5AB",   // Champagne Gold
          dark: "#AA8C2C",    // Deep Gold
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
        surface: {
          light: "rgba(255, 255, 255, 0.03)",
          dark: "rgba(0, 0, 0, 0.6)",
          border: "rgba(212, 175, 55, 0.15)", // Subtle gold border
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to bottom, #050505, #121212)',
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-text': 'linear-gradient(to right, #D4AF37, #F3E5AB, #D4AF37)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s infinite linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
