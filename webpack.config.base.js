const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/i,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|woff(2)?|ttf|eot|otf|webp|csv)$/i,
        use: [
          { loader: 'url-loader', options: { limit: 8192, name: '[name].[ext]', quality: 85, outputPath: 'assets' } }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/assets/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
};
