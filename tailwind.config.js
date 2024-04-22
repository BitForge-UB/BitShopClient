/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0B0C10",
        Secondary: "#F5F5F5",
        Title: "#66FCF1",
        Text: "#C5C6C7",
        Button: "#45A29E",
      },
    },
  },
  plugins: [],
};
