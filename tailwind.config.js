module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      color: {"custom-bg-gray-50": "#EEF2FF"}
    },
  },

  variants: {
    backgroundColor: ["even", "hover"],
    textColor: ["first"]
  },
  plugins: [],
}
