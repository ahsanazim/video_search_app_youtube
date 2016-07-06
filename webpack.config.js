const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

const info = autoprefixer({ browsers: ['last 1 version'] }).info();
console.log(info);

module.exports = {
  stats: { colors: true },
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src'],
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    },
    {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
    },
      // You could also use other loaders the same way. I. e. the autoprefixer-loader
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
