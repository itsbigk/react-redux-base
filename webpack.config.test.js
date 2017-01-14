const path = require('path'),
      babelWebpack = require('./babelWebpack');

module.exports = {
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'cheerio': 'window'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '/src'),
        exclude: [/node_modules/, /\.spec\.jsx?$/],
        use: 'istanbul-instrumenter',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: babelWebpack
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
  }
}
