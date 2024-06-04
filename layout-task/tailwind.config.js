/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plane-air': "url('img/planeAir.png')",
        'engine': "url('img/engine.png')",
    },
  },
  plugins: [],
  }
}