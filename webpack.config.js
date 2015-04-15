var jsxLoaders = ['babel-loader?stage=1'];

module.exports = {
  cache: true,
  entry: './app',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /amaphiko-web\/node_modules/, loaders: jsxLoaders },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
