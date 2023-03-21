module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 50,
      propList: ['*'],
    },
  },
};


// module.exports = {
//   plugins: {
//     'postcss-px-to-viewport': {
//       viewportWidth: 375
//     },
//   },
// };