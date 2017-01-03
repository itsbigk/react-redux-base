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
  externals: nodeModules,
  target: 'node',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env':  {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.server.js',
    path: `${__dirname}/dist`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'ignore'
      },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  __dirname: true
}
