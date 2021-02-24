const path                   = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin             = require('copy-webpack-plugin');
const HtmlWebPackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
// const CssMinimizerPlugin     = require('css-minimizer-webpack-plugin');
// const TerserPlugin           = require('terser-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: './js/main.[contenthash].js',
    assetModuleFilename: './assets/img/[name].[contenthash][ext][query]',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/i,
        exclude: /(styles.css|styles.scss)$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /(styles.css|styles.scss)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
      ignoreOrder: false
    }),

    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets/' }
      ]
    })
  ]
};