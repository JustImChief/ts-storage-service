const path = require('path');

module.exports = {
  mode:    'production',
  entry:   {
    'ts-storage-service':     path.resolve(__dirname, 'src/index.ts'),
    'ts-storage-service.min': path.resolve(__dirname, 'src/index.ts'),
  },
  output:  {
    path:           path.resolve(__dirname, '_bundles'),
    filename:       '[name].js',
    library:        'TSStorageService',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module:  {
    rules: [
      {
        test:    /\.tsx?$/,
        loader:  'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};