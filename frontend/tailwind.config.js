/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-t": "#FCEED5",
        "secondary-t": "#F7DBA7",
        "main-blue": "#003459",
      },
    },
  },
  plugins: [],
};
