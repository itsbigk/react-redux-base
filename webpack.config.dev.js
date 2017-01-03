const webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: [
    './src/App.jsx'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path:`${__dirname}/client/dev`
  },
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
        {
            test: /\.(js|jsx|css)$/,
            exclude: [/node_modules/, /\.spec\.jsx?$/],
            loader: 'source-map-loader'
        }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        include: __dirname,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap?importLoaders=1!postcss'
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: `${__dirname}/client/dev`,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false
      }
    }
  }
}
