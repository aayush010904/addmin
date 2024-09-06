/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: false,
  content: ["**/*.{html, jsx, js}", "**/*.js", "**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#c490ff",
        secondary: "#6c72e8",
      },
    },
  },
  plugins: [],
};
