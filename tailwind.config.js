/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starColor1: "#f6f0fe",
        starColor2: "#dfabca",
        starColor3: "#e9c1d4",
        starColor4: "#593a82",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
