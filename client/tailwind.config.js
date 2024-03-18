/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
 // content: ["../src/components/ButtonComp.jsx"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Or the path to your components directory
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
  
}

