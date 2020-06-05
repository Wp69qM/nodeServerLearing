const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  // 项目入口
  entry: {
    app: path.join(__dirname, "./../", "app.js"),
  },
  output: {
    path: path.join(__dirname, "./../", "dist"),
    filename: "[name].js",
  },
};
