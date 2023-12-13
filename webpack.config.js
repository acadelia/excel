const path = require("path");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd; // when u run build

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line object-curly-spacing
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  devServer: {
    port: 9000,
    hot: isDev,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[fullhash].js",
  },
  resolve: {
    extensions: [".js"],
    // ../../../src
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "core"),
    },
  },
  devtool: isDev ? "source-map" : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[fullhash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
