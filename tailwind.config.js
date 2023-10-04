/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        3: '.1875rem'
      },
      outlineWidth: {
        3: '.1875rem'
      },
      outlineOffset: {
        6: '.375rem'
      },
      spacing: {
        'artical-img': '430px'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}