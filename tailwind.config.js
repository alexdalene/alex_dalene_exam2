/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/js/*.js',
    './src/js/**/*.js',
    './src/js/**/**/*.js',
    './src/*.js',
    './**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      animation: {
        enter: 'enter 200ms ease-in-out',
      },
      keyframes: {
        enter: {
          '100%': { transform: 'scale(100%)' },
          '0%': { transform: 'scale(0%)' },
          '100%': { transform: 'scale(100%)' },
        },
      },
      boxShadow: {
        invertedBorder: '0 -25px 0 0 #1B1B1F',
      },
      fontSize: {
        sm: '0.833rem',
        base: '1rem',
        xl: '1.200rem',
        '2xl': '1.440rem',
        '3xl': '1.728rem',
        '4xl': '2.074rem',
        '5xl': '2.489rem',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Gantari', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
