/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        customMid: "930px",
        customSm: "518px",
      },
    },
  },
  plugins: [],
};
