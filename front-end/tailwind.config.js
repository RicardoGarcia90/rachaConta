/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FF3131',
        textColor: '#eaeaea',
        textColorBlack: '#333',
        backgroundTheme: '#2E2E2E',
        backgroundCardFriend: '#fff',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
    },
  },
  plugins: [],
};
