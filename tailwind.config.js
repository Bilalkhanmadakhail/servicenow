/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      gtPlanner: ["gt-planner", "sans-serif"],
   
      poppins: ["poppins", "sans-serif"],
      poppinsITB: ["poppinsITB", "sans-serif"],
      poppinsr: ["poppinsr", "sans-serif"],
      poppinsIT: ["poppinsIT", "sans-serif"],
      sarif: ["sarif", "sans-serif"],

    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1336px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1436px',
      '4xl': '1500px',
    },
    extend: {
      boxShadow: {
        '3xl': '0px 6px 6px rgba(0, 0, 0, 0.03), 0px 18px 18px rgba(0, 0, 0, 0.09)',
      }
    },
  },
  plugins: [],
}
