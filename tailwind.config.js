/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "639px" }, // Mobile screens with a minimum width of 600px
        tablet: { min: "640px", max: "1024px" }, // Tablet screens between 640px and 1024px
      },

      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
