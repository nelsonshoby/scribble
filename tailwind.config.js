module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      color: {"custom-bg-gray-50": "#EEF2FF"},
      width: {
        '400': '400px',
       }

    },
  },

  variants: {
    backgroundColor: ["even"],
    // backgroundColor: ["even", "hover"],
    textColor: ["first"],

  },
  plugins: [],
}
