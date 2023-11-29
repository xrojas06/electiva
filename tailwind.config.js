/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryred: "#BA1200",
        babyblue: "#9DD1F1",
        blackcool: "#031927",
        bluegray: "#EBF8FF",
        purpleblue: "#a4c6fa",
        whiteblue: "#F7FBFF",
        graycool: "#F1F1F1",
        secondred: "#D23423",
        primary: "#f8f7fa",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 100)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimpurpleblue: "rgba(33,34,89,0.7)",
        newblue1: "#3261a3",
        dimNewblue: "rgba(50,97,163,0.6)",
      },
      fontFamily: {
        Heebo: ["Poppins"],
      },
    },
    screens: {
      xs: "480px",
      ssm: "550px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins:[
  ],
}