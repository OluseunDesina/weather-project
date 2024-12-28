/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#a50505",
        "transparent-primary": "#a5050533",
      },
    },
  },
  plugins: [],
};
