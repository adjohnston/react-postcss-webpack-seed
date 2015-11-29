var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),

  output: {
    path: __dirname,
    filename: './bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src/app/')
        ],
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};
