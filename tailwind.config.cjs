module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#A02279",
        dark: "#434343",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
};
