const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  // exclude node modules, and use the babel-loader to load javascript files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // resolve other file extensions before javascript files
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  // bundled source files should be put in the dist folder as bundle.js
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello Webpack bundled JavaScript Project",
      template: "./src/index.html"
    })
  ]
};
