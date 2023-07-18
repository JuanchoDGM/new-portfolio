/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'grotesk': ['Space Grotesk', 'sans-serif'],
    },
    backgroundImage: {
      'gray-laptop': "url('../img/gray-laptop.webp')",
      'my-pic': "url('../img/my-pic.png')"
    },
  },
  plugins: [],
}