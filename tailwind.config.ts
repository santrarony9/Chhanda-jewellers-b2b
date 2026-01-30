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
        background: "#050505", // Deepest obsidian
        foreground: "#FAFAFA",
        primary: {
          DEFAULT: "#D4AF37", // Classic Gold
          50: "#FCF9E8",
          100: "#F9F1D8", // Champagne
          200: "#F3E5AB",
          300: "#E6C768",
          400: "#DDB850",
          500: "#D4AF37", // Base
          600: "#AA8C2C", // Deep
          700: "#806921",
          800: "#554616",
          900: "#2B230B",
        },
        secondary: {
          DEFAULT: "#151515",
          light: "#2A2A2A",
          dark: "#0A0A0A"
        },
        surface: {
          light: "rgba(255, 255, 255, 0.03)",
          dark: "rgba(0, 0, 0, 0.4)",
          border: "rgba(212, 175, 55, 0.15)",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to bottom, #050505, #121212)',
        'hero-vignette': 'radial-gradient(circle at center, transparent 0%, #050505 100%)',
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 4s infinite linear',
        'slow-zoom': 'slowZoom 20s infinite alternate linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
