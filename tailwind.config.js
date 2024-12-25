export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE414D',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}