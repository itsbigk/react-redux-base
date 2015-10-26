module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
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
      }
    ]
  }
}
