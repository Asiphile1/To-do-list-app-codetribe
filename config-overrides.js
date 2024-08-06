const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "fs": require.resolve('browserify-fs'),
    "path": require.resolve('path-browserify'),
    "stream": false,
    "crypto": false
  };
  return config;
};

