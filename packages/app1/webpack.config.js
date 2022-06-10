const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false
  },

  output: {
    publicPath: "http://localhost:3002/",
    pathinfo: true,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
          cacheDirectory: false,
        }
      },
    ]
  },
  stats: {
    children: true
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      library: { type: "var", name: "app_1" },
      filename: "remoteEntry.js",
      remotes: {
        libs: 'libs',
      },
      exposes: {
      },
      // shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
