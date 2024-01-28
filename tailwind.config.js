/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(18rem, 1fr))",
      },
      backgroundImage: {},
      colors: {
        "kaizen-black": "#111214",
        "kaizen-white": "#f2edf4",
        "kaizen-blue": "#000796",
        buttonBlue: "#5C61BC",
        "kaizen-accent": "#3c4090",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slide: "slide 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
