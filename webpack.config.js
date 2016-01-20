module.exports = {
  cache: true,
  entry: './src/example/app',
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
      { test: /\.jsx$/, loaders: ['babel-loader'] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
