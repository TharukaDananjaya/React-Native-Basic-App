/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green for buttons and headers
        secondary: "#FF9800", // Orange for highlights like add/edit buttons
        background: "#F5F5F5", // Light gray for the app background
        text: "#212121", // Dark gray for primary text
        accent: "#03A9F4", // Light Blue for links and secondary highlights
      },
    },
  },
  plugins: [],
}