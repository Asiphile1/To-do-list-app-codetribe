const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "fs": require.resolve('browserify-fs'),
      "path": require.resolve('path-browserify')
    }
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    // Add any necessary plugins here
  ]
};
