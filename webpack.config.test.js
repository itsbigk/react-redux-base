const webpack = require('webpack'),
      path    = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env':  {
          'BROWSER': JSON.stringify(true)
        }
      })
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '/src/components/'),
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        loader: 'istanbul-instrumenter'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        includePaths: [] // example: [path.resolve(__dirname, '/node_modules/foundation-sites/scss/')]
      }
    ]
  }
}
