import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2332',
          dark: '#0f1419',
          light: '#2d3e50',
        },
        accent: {
          DEFAULT: '#4a9eff',
          light: '#6bb3ff',
          dark: '#2d7fd9',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;