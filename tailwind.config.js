/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('./pages/assets/fundo-header.png')"
      }
    },
  },
  plugins: [],
}

