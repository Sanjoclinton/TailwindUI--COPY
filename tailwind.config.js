/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      scrreens: {
        'widescreen': { raw: "(min-aspect-ratio: 3/2)" },
        'tallscreen': { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "translate-x-full" },
          "100%": { transform: "translate-x-0" },
        },
      },
      animation: {
        "open-menu": "open-menu 5s ease-in",
      },
    },
  },
  plugins: [],
};
