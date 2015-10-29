module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      // JSX
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      // JS
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
