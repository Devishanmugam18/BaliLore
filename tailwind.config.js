/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#E91E63",
        charcoal: "#424242",
        ivory: "#FFFFF0",
        lightgray: "#D3D3D3",
      },
      fontFamily: {
        headline: ['"playfair-display"', "serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
