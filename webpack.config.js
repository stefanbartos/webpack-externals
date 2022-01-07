const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 8080
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  externalsType: 'script',
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    dashjs: ["https://cdn.dashjs.org/latest/dash.all.min.js", "dashjs"], 
    react: ["https://unpkg.com/react@17.0.2/umd/react.production.min.js", "React"],
    "react-dom": ["https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js", "ReactDOM"]
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],
}