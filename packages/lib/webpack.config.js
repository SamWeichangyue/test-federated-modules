const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path')
module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  output: {
    publicPath: "http://localhost:3001/",
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
        exclude: [
          /node_modules/,
        ],
        options: {
          presets: [require.resolve("@babel/preset-react")],
          cacheDirectory: false,
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      library: { type: "var", name: "libs" },
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
        antd: "./src/antd",
        react: "./src/react",
        'react-dom': "./src/react-dom"
      },
      // shared: ["react", "react-dom"],
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html"
    // })
  ]
};
