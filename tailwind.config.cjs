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
          300: '#4187f6',
        },
      },
      width: {
        70: '70%',
      },
      rotate: {
        5: '5deg',
        10: '10deg',
        14: '14deg',
        16: '16deg',
        18: '18deg',
        20: '20deg',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

// border legal
// rounded-lg
// border
// border-primary-200
// shadow-md
// shadow-primary-100
