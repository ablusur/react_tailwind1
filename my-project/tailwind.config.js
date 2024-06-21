
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'osans': ['Open Sans', 'sans-serif'],
      },
      maxWidth:{
        contianer:"1120px"
      },
      colors:{
        clr:"green"
      },
      background:{
        bn:"url(../)"
      }
    },
  },
  plugins: [],
}