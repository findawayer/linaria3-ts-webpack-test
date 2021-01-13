const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDevelopment = env !== "production";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: path.join(__dirname, "src", "index.jsx"),
    devtool: "source-map",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./build"),
    },
    devServer: {
      contentBase: path.resolve(__dirname, "public"),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "@linaria/webpack-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        inject: true,
        template: path.resolve("public/index.html"),
        chunks: "all",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
