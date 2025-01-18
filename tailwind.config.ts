/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- Make sure this is set
  content: [
    // Your paths here
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // etc...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
