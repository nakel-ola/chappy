/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screen/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c45c0",
        secondary: "#e086e3",
        accent: "#f9c1f9",
        background: "#ffffff",
        text: "#333333",
        dark: "#16161d",
      },
    },
  },
  plugins: [],
};
