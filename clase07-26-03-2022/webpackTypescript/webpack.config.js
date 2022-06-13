const path = require("path");

module.exports = {
  target: "node",
  mode: "development", //production
  entry: {
    index: path.resolve(__dirname, "src", "server.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
