/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        "lapp-yellow": "#fdc12d",
      },
      fontSize: {
        "2xs": "0.55rem",
      }
    },
  },
  plugins: [],
};
