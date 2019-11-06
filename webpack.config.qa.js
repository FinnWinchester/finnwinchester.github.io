const merge = require('webpack-merge');
const prodConfig = require('./webpack.config.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prodConfig, {
  plugins: [new BundleAnalyzerPlugin()]
});
