const { merge } = require('webpack-merge');
const common    = require('./webpack.common');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
	mode: 'development',
  devtool: "eval-source-map",
	devServer: {
		port: 8080,
		contentBase: '../dist',
		open: 'chrome'
	},
	target: 'web'
});
