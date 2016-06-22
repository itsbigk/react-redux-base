const webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: [
    './src/App.jsx'
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  output: {
    filename: 'bundle.min.js',
    path: `${__dirname}/dist`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
      { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },
      { test: /\.json$/, loader: "json-loader"}
    ]
  }
}
