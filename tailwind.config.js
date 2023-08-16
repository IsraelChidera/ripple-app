/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#11453B',
        'white': '#fff',
        'secondary': '#B4A572',  
        'tertiary': '#EA4E4B',    
        'dark': '#515251',
        'heading': '#292A29',
        'sidebar': '#2b343b',
        'hover': '#4D8177'
      },
    },
  },
  plugins: [],
}

