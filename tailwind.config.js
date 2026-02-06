/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#53629E',        // primary brand color
        accentLight: '#99F6E4',   // hover / glow
        accentDark: '#0F766E',    // borders / dark UI
      },
    },
  },
  plugins: [],
}
