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
          1: '#023859',
          2: '#2c2c6c',
          3: '#4187f6',
          4: '#1f1f38',
        },
        trybeTextColor: {
          100: '#065220',
        },
        secondary: {
          1: '#03658C',
          2: '#d37c7c'
        }
      },
      width: {
        70: '70%',
        '35vw': '35vw',
      },
      rotate: {
        5: '5deg',
        8: '8deg',
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
