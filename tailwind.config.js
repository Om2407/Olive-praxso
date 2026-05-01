/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        olive: {
          dark: '#1c3410',
          DEFAULT: '#2d4a1e',
          light: '#3d6428',
          bg: '#f0f4ec',
        }
      }
    },
  },
  plugins: [],
}
