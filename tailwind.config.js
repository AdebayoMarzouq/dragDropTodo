/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('./src/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./src/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('./src/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./src/images/bg-mobile-light.jpg')",
      },
      colors: {
        light: {
          bg1: '#e4e5f1',
          bg2: '#fafafa',
          text1: '#484b6a',
          text2: '#9394a5',
          text3: '#d2d3db',
        },
        dark: {
          bg1: '#161722',
          bg2: '#25273c',
          hover: '#e4e5f1',
          text1: '#cacde8',
          text2: '#777a92',
          text3: '#4d5066',
          texts: '#393a4c',
        },
      },
      screens: {},
    },
  },
  plugins: [],
}
