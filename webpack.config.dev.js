const webpack = require('webpack')

module.exports = {
  entry: [
    './src/App.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  output: {
    filename: 'bundle.js',
    path:`${__dirname}/client/dev`
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        use: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        include: __dirname,
        use: 'babel'
      },
      {
        test: /\.css$/,
        use: [
          'style',
          {
            loader: 'css',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss'
        ]
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
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: `${__dirname}/client/dev`,
    hot: true,
    stats: 'errors-only',
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false
      }
    }
  }
}
