module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00C6D8",
          lime: "#8DEE5F",
          pink: "#FF007F",
          purple: "#7B2CBF",
          dark: "#0A0A0A"
        }
      }
    },
  },
  plugins: [],
}
