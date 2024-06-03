module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0021A5",
        secondary: "#FA4616",
        tertiary: "#0A192F",
        darkblue: "#333333"
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
