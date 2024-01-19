/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['Be Vietnam Pro', 'sanserif']
      },
      colors: {
        'azul-oscuro': '#000b1e',
        'celeste': '#01c6ff',
        'celeste-oscuro': '#01698e'
      }
    },
  },
  plugins: [],
}

