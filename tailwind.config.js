/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#121212",
        darkText: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
