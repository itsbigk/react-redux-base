const fs = require('fs'),
      babelWebpack = require('./babelWebpack');

let nodeModules = {}

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)

module.exports = {
  entry: './server',
  externals: nodeModules,
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  output: {
    filename: 'bundle.server.js',
    path: `${__dirname}/dist`
  },
  performance: {
    hints: 'error'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        loader: 'babel',
        query: babelWebpack
      },
      {
        test: /\.css$/,
        use: 'ignore'
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: 'ignore'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'ignore'
      }
    ]
  }
}
