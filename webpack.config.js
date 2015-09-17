module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      // JSX
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      // LESS
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css!less'
      }
    ]
  }
}
