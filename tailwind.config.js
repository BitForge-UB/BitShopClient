/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#004E98",
        Secondary: "#FFA500",
        Background: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
