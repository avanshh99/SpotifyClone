/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{

      backdrop:"#121212",
      footer:"#181818",
      primary:"#1ed760",
      active:"#282828",
      highlight:"#1fdf64"

          }
    },
  },
  plugins: [],
}
