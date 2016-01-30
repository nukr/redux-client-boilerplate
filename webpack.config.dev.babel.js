import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app.react.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.react.js', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: path.resolve(__dirname, 'node_modules')
    }]
  }
}

