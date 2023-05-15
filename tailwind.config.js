/** @type {import('tailwindcss').Config} */
const { withTV } = require("tailwind-variants/transformer");

module.exports = withTV({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgc-light": "#f0e7db",
        "bgc-dark": "#202320",
        "text-color-light": "#1a202c",
        "text-color-dark": "#fff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
