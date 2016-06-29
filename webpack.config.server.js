const webpack = require('webpack'),
      path = require('path'),
      fs = require('fs');

let nodeModules = {}

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)

module.exports = {
  entry: [
    './server/server.js'
  ],
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/\.(css|less|scss)$/)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.server.js',
    path: __dirname + '/dist'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  __dirname: true
}
