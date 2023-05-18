/** @type {import('tailwindcss').Config} */
const { withTV } = require("tailwind-variants/transformer");
const radixColors = require("@radix-ui/colors");

module.exports = withTV({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-background": "var(--color-app-background)",
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
  plugins: [
    require("windy-radix-palette")({
      colors: {
        orange: radixColors.orange,
        orangeA: radixColors.orangeA,
        orangeDark: radixColors.orangeDark,
        orangeDarkA: radixColors.orangeDarkA,
        sand: radixColors.sand,
        sandA: radixColors.sandA,
        sandDark: radixColors.sandDark,
        sandDarkA: radixColors.sandDarkA,
        slate: radixColors.slate,
        slateA: radixColors.slateA,
        slateDark: radixColors.slateDark,
        slateDarkA: radixColors.slateDarkA,
        brown: radixColors.brown,
        brownA: radixColors.brownA,
        brownDark: radixColors.brownDark,
        brownDarkA: radixColors.brownDarkA,
      },
    }),
  ],
  darkMode: "class",
});
