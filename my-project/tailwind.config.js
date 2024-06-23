
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
       
        'pops': ["Poppins", 'sans-serif'],
      },
      maxWidth:{
        container:"1120px"
      },
      colors:{
        clr:"green"
      },
      backgroundImage:{
        bn:"url(../src/assets/ban.png)"
      },
    },
  },
  plugins: [],
}