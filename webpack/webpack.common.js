const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const configureHtml = () => {
  return {
    title: "Space",
    filename: "index.html",
    template: path.resolve("templates", "webapp.html"),
    inject: true,
  };
};

module.exports = () => {
  const outputDir = path.join(__dirname, "../prod");

  return {
    target: "web",
    entry: "./app/bootstrap/main.ts",
    output: {
      path: path.join(outputDir),
      filename: path.join("js", "bundle.js"),
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            getCustomTransformers: () => ({
              before: [tsImportPluginFactory({ style: "css" })],
            }),
          },
        },
        {
          test: /\.(gif|png|jpg|svg)$/,
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: ["url-loader?limit=100000"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: path.join("css/styles.css"),
      }),
      new HtmlWebpackPlugin(configureHtml()),
    ],
  };
};
