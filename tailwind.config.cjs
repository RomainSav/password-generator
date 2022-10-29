/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: {
        1: "#5B24EE",
        2: "#37198B"
      },

      gray: {
        1: "#140B2D"
      },

      neutral: {
        1: "#E0E0E0"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(#1C0E41, #140B2D)"
      }
    },
  },
  plugins: [],
}
