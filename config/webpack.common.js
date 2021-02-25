const path                   = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
// const CopyPlugin             = require('copy-webpack-plugin');
// const CssMinimizerPlugin     = require('css-minimizer-webpack-plugin');
// const TerserPlugin           = require('terser-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {

  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/main.[contenthash].js',
    publicPath: ''
  },
  
  module: {

    rules: [

      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },

      {
        test: /\.(css|scss|sass)$/i,
        exclude: /styles\.(css|sass|scss)$/i,
        use: [ 
          'style-loader',
          'css-loader',
          'sass-loader' 
        ]
      },

      {
        test: /styles\.(css|sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },

      {
        test: /\.html$/i,
        loader: 'html-loader'
      },

      {
        test: /\.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$/i,
        type: 'asset',
        generator: {
         filename: 'assets/img/[name].[contenthash][ext][query]'
        }
      },

      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset',
        generator: {
         filename: 'assets/fonts/[name].[contenthash][ext][query]'
        }
      },

      {
        test: /\.(webm|ogg|mp4|mp3|3gpp|3gpp2|3gp2|mpeg)$/i,
        type: 'asset',
        generator: {
         filename: 'assets/media/[name].[contenthash][ext][query]'
        }
      }
    ]
  },

  plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      ignoreOrder: false
    }),
    // Util pero no por ahora
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'src/assets', to: 'assets/' }
    //   ]
    // })
  ]
};