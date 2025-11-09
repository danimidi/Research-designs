/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "ds-",
  theme: {
    extend: {
      colors: {
        "light-gray": "#f0fff0",
        "dark-blue": "#1f506b",
        "medium-blue": "#3c96ac",
        "light-blue": "#e6e6fa",
        "pink-medium": "#ffa7a4",
        neutral: "#ece8e8",
      },
    },
  },
  plugins: [],
};
