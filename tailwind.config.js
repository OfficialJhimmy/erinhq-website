/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // app router
    "./pages/**/*.{js,ts,jsx,tsx}",   // pages router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"      // if you use src/
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B1B",
        cream: "#FBF5E4",
        copper: {
          light: "#FFC687",
          DEFAULT: "#E8B67E",
          deep: "#FF8906",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FFFFFF, #FFC687, #FF8906)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in forwards",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};