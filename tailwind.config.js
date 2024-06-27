/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "639px" }, // Mobile screens with a minimum width of 600px
        tablet: { min: "640px", max: "1024px" }, // Tablet screens between 640px and 1024px
      },
    },
  },
  plugins: [],
};

// Breakpoints Should be redefine without extend keywowrd becouse it add new breakpoint into default one in last
// screens: {
//   'tablet': '640px',
//   // => @media (min-width: 640px) { ... }

//   'laptop': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'desktop': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   'largeScreen': '1536px',
//   // => @media (min-width: 1536px) { ... }

// },
