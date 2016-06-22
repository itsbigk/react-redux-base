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
    path: __dirname + '/lib'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  __dirname: true
}
