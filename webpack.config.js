const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// 나중에 .env로 port 번호 추가할것
const port = 4000;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./frontEnd/src/index.js"),
  output: {
    path: path.resolve(__dirname, "./frontEnd/dist"),
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/, /\.test.js/, /__tests__/, /setUpTest.js/],
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$|\.jpg$|\.gif$|\.jpeg$|.svg$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./frontEnd/public/index.html"),
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    historyApiFallback: true,
  },
};
