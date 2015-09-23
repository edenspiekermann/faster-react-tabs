var jsxLoaders = ['babel-loader?stage=1'];

module.exports = {
  cache: true,
  entry: './example/app',
  output: {
    filename: 'example/bundle.min.js'
  },
  devServer: {
    noInfo: true,
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: jsxLoaders },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
