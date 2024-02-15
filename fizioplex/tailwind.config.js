/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: "#0d9488"
      },
      fontFamily: {
        roboto: ["Space Grotesk", "sans-serif"],
        
      },
    },
  },
  plugins: [],
}
