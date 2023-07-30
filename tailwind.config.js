/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }
      'md': '576px',
      // => @media (min-width: 580px) { ... }
      'lg': '768px',
      // => @media (min-width: 768px) { ... }
      'xl': '992px',
      // => @media (min-width: 992px) { ... }
      '2xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [
  ],
}
