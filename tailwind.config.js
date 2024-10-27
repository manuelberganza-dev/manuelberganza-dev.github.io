/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./code/**/*.{html,njk,md}", "./.elventy.js"],
  theme: {
    extend: {
      fontFamily: {
        'teko': ['Teko'],
        'roboto': ['Roboto']
      },
      colors: {
        'mb-primary': '#000B1E',
        'mb-secondary': '#020617',
        'mb-blue-light': '#14A1F0',
        'mb-gray': '#1F2937',
        'mb-gray-light': '#9CA3A1'
      }
    },
  },
  plugins: [],
}

