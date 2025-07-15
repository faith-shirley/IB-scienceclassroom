/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        oxford: '#14213D',
        mustard: '#FCA311',
        snow: '#FFFFFF',
        slate: '#E5E5E5',
        sky: '#4BA3C3',
      },
      fontFamily: {
        logo: ['Playfair Display', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        ui: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}