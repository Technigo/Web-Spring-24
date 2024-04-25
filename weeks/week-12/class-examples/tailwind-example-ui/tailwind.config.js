/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "100": "25rem",
        "500": "500px"
      },
      colors: {
        clifford: "#da373d",
        technigoBlue: "#0000FF",
        pink: "rgb(255, 174, 193)",
        hotPink: "#FF4575",
        neutral: colors.gray,
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Melo", "monospace"],
      nella: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern": "url('/heroImage.jpg')",
    },
  },
  plugins: [],
}
