/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'madureira': "url('/img/bg.jpg')",
      },
      colors: {
        madureira: {
          100: "#3f8dc4",
          200: "#090979",
          300: "#06065a",
          600: "#070742",
          700: "#020024",
        },
      },
    },
  },
  plugins: [],
};
