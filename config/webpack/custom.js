const path = require('path')

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '..', '..', 'app/javascript/components'),
      Pages: path.resolve(__dirname, '..', '..', 'app/javascript/components/Pages'),
      Modals: path.resolve(__dirname, '..', '..', 'app/javascript/components/Modals'),
      Inputs: path.resolve(__dirname, '..', '..', 'app/javascript/components/Inputs'),
      Images: path.resolve(__dirname, '..', '..', 'app/javascript/images'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
              modifyVars: {
                'font-family': '"Roboto", sans-serif',
                'primary-color': '#00A3C5',
              }
            },
          },
        ],
      },
    ],
  },
}
