module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      propList: ['*'],
      rootValue: 100,
      // exclude: /node_modules/i
    },
  }
}