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
        1: "#2A2536",
        2: "#363040",
        3: "#453F51"
      },

      neutral: {
        1: "#E0E0E0",
        2: "#B6B6B6",
        3: "#ACACAC"
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
