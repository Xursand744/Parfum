/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: "340px",
        lg: "674px",
        md: "1024px",
        xl: "1240px",
      },
    },

    extend: {},
  },
  plugins: [],
};
