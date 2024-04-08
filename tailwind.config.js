/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // footer
        'VeryDarkBlue': 'hsl(243, 87%, 12%)',
        // bg above footer
        'DesaturatedBlue': 'hsl(238, 22%, 44%)',
        // button
        'BrightBlue': 'hsl(224, 93%, 58%)',
        // hover
        'ModerateCyan': 'hsl(170, 45%, 43%)',
        // bg main
        'LightGrayishBlue': 'hsl(240, 75%, 98%)',
        // p
        'LightGray': 'hsl(0, 0%, 75%)'
      },
      backgroundImage:{
        "bg-desktop": "url('/images/bg-curve-desktop.svg')",
        "bg-mobile": "url('/images/bg-curve-mobile.svg')",
      }
    },
  },
  plugins: [],
}