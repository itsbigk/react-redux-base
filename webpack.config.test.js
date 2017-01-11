const path = require('path')

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
        loader: 'istanbul-instrumenter',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
  }
}
