const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const createConfig = (env, argv) => {
  const config = {
    target: 'web',

    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', 'main.js'],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            ExtractTextPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(eot|svg|ttf|otf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
          use: {
            loader: 'file-loader',
            options: {
              name: '/[name].[hash].[ext]',
              outputPath: 'static/fonts',
            },
          },
        },
      ],
    },

    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
      ],
    },

    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new HtmlPlugin({
        title: 'Nuke',
        filename: 'index.html',
        inject: 'body',
        template: '../template/index.html',
      }),
      new ExtractTextPlugin({
        filename: 'static/[name].[contenthash].css',
        chunkFilename: 'static/chunk.[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: '../public' },
        ],
      }),
      new CnameWebpackPlugin({
        domain: 'icpc.uclaacm.com',
      }),
    ],

    output: {
      path: path.resolve(__dirname, 'bin'),
      publicPath: '/',
      filename: 'static/[name].[hash].js',
      chunkFilename: 'static/chunk.[name].[chunkhash].js',
    },

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      compress: true,
      host: '0.0.0.0',
      port: 12345,
      disableHostCheck: true,
      historyApiFallback: true,
    },
  };

  return config;
};

module.exports = createConfig;
