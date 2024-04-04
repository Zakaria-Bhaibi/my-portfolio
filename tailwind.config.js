/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        alata : ['Alata'],
        sfmono : ['sfmono'],
      },
      colors:{
        'lightgreen':'#64FFDA',
        'lightwhite':'#CCD6F6',
        'lightwhite2':'#8892B0',
      }
    },
    
  },
  plugins: [],
}

