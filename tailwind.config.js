/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBg: "#FFF2EF",
        darkBg: "#111827",
        lightText: "#1f2937",
        darkText: "#F7A5A5",
      },
    },
  },
  plugins: [],
}