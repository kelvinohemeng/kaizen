/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "kaizen-black": "#111214",
        "kaizen-white": "#f2edf4",
        "kaizen-blue": "#000796",
        "kaizen-accent": "#3c4090",
      },
    },
  },
  plugins: [],
};
