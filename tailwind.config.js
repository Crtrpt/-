const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
    },
    textColor: theme => theme('colors'),
    extend: {},
  },
  variants: {
    extend: {
      fontStyle: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
