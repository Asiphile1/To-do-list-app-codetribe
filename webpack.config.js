const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "fs": false, 
      "path": require.resolve('path-browserify'),
      "util": require.resolve('util/'),
      "stream": require.resolve('stream-browserify')
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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    
  ]
};
