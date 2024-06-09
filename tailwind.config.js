/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'roman-coffe': {
          '50': '#f5f4f1',
          '100': '#e6e1db',
          '200': '#cec5ba',
          '300': '#b2a292',
          '400': '#9b8674',
          '500': '#8c7666',
          '600': '#745e53',
          '700': '#614d47',
          '800': '#54433f',
          '900': '#4a3b39',
          '950': '#29201f',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}
