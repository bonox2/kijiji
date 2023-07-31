
module.exports = {
  mode:'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    screens: {
      '2xl': {'max': '1200px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '992px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '768px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '576px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '320px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [
  ],
}
