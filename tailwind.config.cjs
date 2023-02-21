const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "mainblue": "#ECF5F8",
    },
    backgroundImage: {
      'hero-pattern':
        "linear-gradient(to right bottom, rgba(89, 86, 86, 0.44), rgba(101, 89, 89, 0.81)), url('https://avatars.githubusercontent.com/u/66634814?v=41')",
    },
    
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}