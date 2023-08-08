/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': "#006dc8"
      },
      fontFamily: {
        'grotesk': ["Space Grotesk", "sans-serif"]
      },
      backgroundImage: {
        'laptop': "url('./img/gray-laptop.png')"
      }
    },
  },
  plugins: [],
}

