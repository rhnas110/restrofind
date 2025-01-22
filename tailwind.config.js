/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f9fd",
          100: "#e4f1fa",
          200: "#c3e2f4",
          300: "#8ecbeb",
          400: "#52b0de",
          500: "#39a1d4",
          600: "#1d78ac",
          700: "#19618b",
          800: "#185274",
          900: "#194561",
          950: "#112c40",
        },
      },
    },
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
  },
  plugins: [],
};
