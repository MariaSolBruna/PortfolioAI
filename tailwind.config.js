/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#f383f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}