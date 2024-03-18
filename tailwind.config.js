/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue : "#05386B",
        customGreen : "#5CDB95",
        customWhite : "#EDF5E1",
        darkGreen : "#379683",
        lightGreen: "#8EE4AF",

      }
    },
    keyframes: {
      mobileMenu: {
        '0%': {
          transform: 'translateY(-130%)',
        },
        '100%': {
          transform: 'translateY(0)',
        },
      },
    },
   
    
  },
  plugins: [],
}

