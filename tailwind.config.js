/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#06B6D4',
        dark: '#1E293B'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

