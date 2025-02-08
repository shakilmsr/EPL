/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0484cc',
          orange: '#fc7404',
          gray: '#545353'
        }
      }
    },
  },
  plugins: [],
};