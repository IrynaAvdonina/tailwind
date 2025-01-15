/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#2bb7da',
        'dark-blue': '#2d314d',
        'green': '#31d35c'
      },
      height: {
        'half-screen': '50vh',
      },
      backgroundImage: {
        'intro': "url('https://tailwindpractice-easybank.netlify.app/images/bg-intro-desktop.svg')",
      }
    },
    fontFamily: {
      publicSans: ["Public Sans", 'sans-serif'],
    },

  },
  plugins: [],
}

