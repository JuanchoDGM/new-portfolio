/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#006dc8",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gray-laptop": "url('img/gray-laptop.webp')",
        "my-pic": "url('../img/my-pic.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
