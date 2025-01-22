/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: "#f90",
        secondary: "#141f2e",
        tertiary: "#0073bb",
        error: "#dd2c00",
        success: "#00c853",
        warning: "#ffab00"
      },
      fontFamily: {
        'lexend-black': ["Lexend-Black", "sans-serif"],
        'lexend-light': ["Lexend-Light", "sans-serif"],
        'lexend-medium': ["Lexend-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
}