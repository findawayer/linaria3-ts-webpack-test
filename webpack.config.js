const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDevelopment = env !== "production";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: path.join(__dirname, "src", "index.tsx"),
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
          test: /\.tsx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@linaria",
                ],
              },
            },
            {
              loader: "@linaria/webpack-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
            {
              loader: "ts-loader",
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
      extensions: [".js", ".ts", ".tsx"],
    },
  };
};
