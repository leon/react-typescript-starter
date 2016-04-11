const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

const config = {
  entry: {
    vendor: './src/vendor',
    app: './src/main'
  },
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: SRC_DIR
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts'],
      include: SRC_DIR
    }]
  },
  output: {
    path: BUILD_DIR,
    pathinfo: true,
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENV': NODE_ENV
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity })
  ],
  resolve: {
    root: [SRC_DIR],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.tsx', '.ts']
  },
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  }
};

// Development
if (NODE_ENV === 'development') {
  console.log('Running in Development Mode');
  config.debug = true;
  config.devtool = 'eval-cheap-module-source-map';
  config.devServer = {
    colors: true,
    noInfo: true,
    historyApiFallback: true,
    port: 8888,
    contentBase: BUILD_DIR
  };
}

// Production
if (NODE_ENV === 'production') {
  console.log('Running in Production Mode');
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]);
}

module.exports = config;
