/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 15px 5px rgba(41, 62, 64, 0.2)',
      }
    },
  },
  plugins: [],
}
