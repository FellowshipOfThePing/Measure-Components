module.exports = {
  purge: [
    './src/components/**/*.tsx',

    // This is a convention for files that only include Styled Components.
    // If you don't use this convention feel free to skip it.
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'measure-dark-blue': '#615EFB',
        'measure-light-blue': '#CDEDFF',
        'measure-dark-red': '#ff4062',
        'measure-light-red': '#FFCDD9',

        'measure-light-green': '#CDFFD5',
        'measure-light-yellow': '#FFF7CD',

        'measure-dark-purple': '#C2AAF3',
        'measure-light-purple': '#D4CDFF',

        'measure-light-orange': '#FFEBCD',

        'measure-light-pink': '#FFCDFD',
      },
      fontFamily: {
        measure: ['Inter']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
