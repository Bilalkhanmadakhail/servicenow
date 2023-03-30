/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
        '3xl': '0 0 15px 5px rgba(41, 62, 64, 0.2)',
      }
    },
  },
  plugins: [],
}
