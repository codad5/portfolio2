// const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    //for tw-elements
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
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
    // require tailwind topography
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
    require('flowbite/plugin')
  ]
}