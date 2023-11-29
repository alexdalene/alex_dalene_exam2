/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,mjs}',
    './src/*.{html,mjs}',
    './**/*.{html,mjs}',
    './*.{html,mjs}',
    './auth/*.html',
    './auth/**/*.html',
  ],
  theme: {
    colors: {
      primary: '#BBC3FF',
      secondary: '#46464F',
      background: '#1B1B1F',
      surface: '#212126',
      surfaceVariant: '#2E2E38',
      onSurfaceVariant: '#67626A',
      text: '#E4E1E6',
      error: '#FFB4AB',
      accentGreen: '#D2F898',
      accentPink: '#F7567C',
    },
    extend: {
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
        headingSerif: ['Baskerville', 'serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
