const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '',
  },
  target: 'web',
  devServer: {
    port: 3000,
    static: [path.resolve(__dirname, 'public')],
    open: true,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
