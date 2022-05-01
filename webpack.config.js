const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");




module.exports={
  output:{
    filename:'app.bundle.js',
    publicPath:"/"
  },
  mode:'development',
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
   
  ],
  module:{
    rules:[
    {  test: /\.js$/,
      exclude:/node_modules/,
       use:{
         loader:'babel-loader',
         options:{
           presets:['@babel/preset-env',
           '@babel/preset-react']
         }
       }
    }
    ]
  }
  }

