const { merge }          = require('webpack-merge');
const common             = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin       = require('terser-webpack-plugin');


/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
	mode: 'production',
  devtool: "source-map",
	optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
    minimize: true,
    minimizer: [
    	new CssMinimizerPlugin(),
    	new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ]
	},
});