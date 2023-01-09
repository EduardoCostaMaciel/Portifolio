/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        opaced: {
          100: 'rgba(0, 0, 0, 0.3)',
        },
        primary: {
          100: '#1f1f38',
          200: '#2c2c6c',
          300: '#4187f6'
        }
      },
      width: {
        70: '70%'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
