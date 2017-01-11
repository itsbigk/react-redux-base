const webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      ManifestPlugin = require('webpack-manifest-plugin'),
      WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    bundle: './src/App.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk'
    ]
  },
  plugins: [
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: 'bundle.[chunkhash].min.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  output: {
    path: `${__dirname}/dist/ui`,
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].js'
  },
  performance: {
    hints: 'error'
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        include: __dirname,
        use: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?importLoaders=1!postcss'
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url',
          options: {
            limit: 1024,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url',
          options: {
            limit: 1024,
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  }
}
