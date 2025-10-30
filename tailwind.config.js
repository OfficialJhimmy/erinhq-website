/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // app router
    "./pages/**/*.{js,ts,jsx,tsx}",   // pages router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"      // if you use src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};