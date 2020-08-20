const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = (env, argv) => {
  const outputDir = path.join(__dirname, "prod");
  const srcDir = path.join(__dirname, "src");

  return merge(common(env, argv), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      hot: true,
      open: false,
      contentBase: outputDir,
      publicPath: "/",
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          production: false,
        },
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: "[file].map",
        moduleFilenameTemplate: path.relative(srcDir, "[resourcePath]"),
      }),
    ],
  });
};
