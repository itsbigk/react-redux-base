const webpack = require('webpack'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      ManifestPlugin = require('webpack-manifest-plugin'),
      ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin('bundle.[chunkhash].css', { allChunks: false })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/dist/ui`,
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'shared')],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      { test: /\.json$/, loader: "json-loader"}
    ]
  }
}
