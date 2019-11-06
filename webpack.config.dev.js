const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    overlay: true,
    port: 3000
  },
  devtool: 'source-map',
  mode: 'development'
});
