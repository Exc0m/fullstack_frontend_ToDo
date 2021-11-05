const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }), new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }]
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".css"]
  },
  devServer: {
    port: 3000
  }
}
