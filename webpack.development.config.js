const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module: {
    preLoaders: [
      {test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
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
