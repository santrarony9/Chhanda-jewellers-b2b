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
        background: "#0B0B0B",
        foreground: "#F5F5F5",
        primary: {
          DEFAULT: "#C9A24D",
          hover: "#D4B05E",
        },
        accent: {
          DEFAULT: "#7A1E1E",
          hover: "#902424",
        },
        surface: {
          light: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.4)",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to bottom right, #0B0B0B, #1A1A1A)',
      }
    },
  },
  plugins: [],
};
export default config;
