/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: "0 5px 20px 0 rgba(0, 0, 0, 0.5)",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "2000px",
        "6xl": "2200px",
        "7xl": "2400px",
        "8xl": "2550px",
      },
      padding: {
        "10em": "10em",
      },
    },
  },
  plugins: [],
};
