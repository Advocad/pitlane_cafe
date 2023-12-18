/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["22px", "24px"],
      xl: ["24px", "32px"],
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      orange: "#ECA139",
    },
    boxShadow: {
      "button-call": "0px 18px 34px 0px rgba(236, 161, 57, 0.25)",
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
  },
  plugins: [],
};
