/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: "#E5E5E5",
      "bg-focus": "#dbdbdb",
      "primary-clear": "#8B5D33",
      "primary-dull": "#be8a5e",
      "primary-visible": "#ffedbc",
      "accent-clear": "#BFBFBF",
      "accent-dull": "#616161",
      clear: "#333333",
      dull: "#5c5c5c",
      duller: "#b3b3b3",
    },
    extend: {},
  },
  plugins: [],
};
