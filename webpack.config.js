const path = require("path");

module.exports = {
  watch: true,
  devtool: "source-map",
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]]
            }
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};
