/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1.5625rem",
      center: "true",
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1160px",
      },
    },
    extend: {
      colors: {
        "cyan-700": "hsl(180,29%,50%)",
        "grayish-cyan-bg": "hsl(180,52%,96%)",
        "grayish-cyan-tablets": "hsl(180,31%,95%)",
        "grayish-cyan-600": "hsl(180,8%,52%)",
        "grayish-cyan-700": "hsl(180,14%,20%)",
      },
    },
  },
  plugins: [],
};
