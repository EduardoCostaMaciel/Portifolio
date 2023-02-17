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
        trybeTextColor: {
          100: '#065220',
        },
      },
      width: {
        70: '70%',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
      },
      maxWidth: {
        '50vw': '50vw',
        '60vw': '60vw',
      },
      maxHeight: {
        '50vh': '50vh',
        '60vh': '60vh',
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
