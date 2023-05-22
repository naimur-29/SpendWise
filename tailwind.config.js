/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "extra-lg": "1140px",
        "extra-sm": "420px",
      },
    },
  },
  plugins: [],
};
