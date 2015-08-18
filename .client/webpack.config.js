module.exports = {
  entry: "./main.js",
  output: {
    path: '../client/lib/compatibility',
    filename: "build.js"
  },
  module: {
    loaders: []
  }
};
