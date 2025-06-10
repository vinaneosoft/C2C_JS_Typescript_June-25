const path = require('path');
module.exports = {
  entry: './dist/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
   resolve: {
    alias: {
      'my-jquery': path.resolve(__dirname, 'node_modules/jquery')
    }
  },
  mode: 'development'
};