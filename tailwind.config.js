/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'screen-navbar-player':'calc(100vh - 6rem - 6rem)'
      },
      fontFamily:{
        barlow: ['"Barlow Condensed"','sans-serif','Arial','Times New Roman','Tahoma']
      }

    },
  },
  plugins: [],
}

