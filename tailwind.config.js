/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
    },
    fontFamily: {
      'main': ["Josefin Sans", "sans-serif"],
      "fa": ["Vazirmatn", 'sans-serif'],
    },
    screens: {
      xs: { max: "480px" },
      sm: { max: "620px" },
      md: { max: "768px" },
      lg: { max: "1200px" },
      xl: { max: "1440px" },
    },
  },
  plugins: [],
};
