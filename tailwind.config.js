/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1597E4',
        'light-grey': '#E6E6E6',
        'grey-default': '#7A7A7A',
        'black-custom' : '#212121'
      },
      maxWidth: {
        '120' : '36rem',
        '150' : '52rem'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

