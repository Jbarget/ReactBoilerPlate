var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    "./src/index.js"
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel']
      },
      { test: /\.css$/, loader: 'style!css'}
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  debug: true,
  devtool: 'source-map',
  devServer: { hot: true },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  inline: true,
  progress: true,
  colors: true
};
