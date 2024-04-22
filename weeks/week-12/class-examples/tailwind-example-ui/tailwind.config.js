/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Melo", "monospace"],
      nella: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
