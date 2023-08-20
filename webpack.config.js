const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: [
      "./src/logic.js",
      "./src/DOM.js",
      "./src/dragdrop.js",
      "./src/shipToggle.js",
      "./src/dragoverhelp.js",
      "./src/dragleavehelp.js",
      "./src/dropManager.js",
      "./src/cleaner.js",
      "./src/danger.js",
      "./src/chunkChecker.js",
      "./src/big4.js",
      "./src/big3.js",
      "./src/big2.js",
      "./src/big1.js",
      "./src/clear1.js",
      "./src/clear2.js",
      "./src/clear3.js",
      "./src/clear4.js",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Battleship",
      /* template: "src/index.html", */
      chunks: ["index"],
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ["/node_modules"],
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
