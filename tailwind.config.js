/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#0E4770",
        success: "#11A058",
        warning: "#F2C744",
        danger: "#F2263E",
        grey: "#7A7A7A",
        placeholder: "#888EA8",
        black: "#242932",
        light: "#F8F8F8",
        white: "#FFFFFF",
        thead: "#E0E6ED",
        hover: "rgba(69,171,245,0.2)",
        input: {
          border: "#E0E6ED",
          placeholder: "#B8B8B8",
        },
        link: {
          base: "#677489",
        },
        badges: {
          default: "#116AD2",
          danger: "#FE5E3E",
          primary: "#6A44F0",
        },
      },
    },
  },
  plugins: [],
};
