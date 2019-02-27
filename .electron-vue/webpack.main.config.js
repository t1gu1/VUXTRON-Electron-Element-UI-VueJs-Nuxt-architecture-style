'use strict'

process.env.BABEL_ENV = 'main'

const webpack = require('webpack')

const BabiliWebpackPlugin = require('babili-webpack-plugin')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

process.env.IS_NODE_MODULE = false
process.env.IS_NODE_MODULE_PATH = ''
const path = require('path')
const fs = require('fs')
fs.readdirSync(path.join(__dirname, '../../../')).forEach(file => {
  if(file === "node_modules") {
    process.env.IS_NODE_MODULE = true
    process.env.IS_NODE_MODULE_PATH = '../../'
  }
});
const { dependencies } = require('../package.json')

let mainConfig = {
  entry: {
    main: path.join(__dirname, '../src/main/index.js')
  },
  externals: [
    ...Object.keys(dependencies || {})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, process.env.IS_NODE_MODULE_PATH + '../dist/electron')
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new VueAutoRoutingPlugin({
      // Path to the directory that contains your page components.
      pages: path.join(__dirname, '../src/renderer/pages'),

      // A string that will be added to importing component path (default @/pages/).
      importPrefix: '@/pages/'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  },
  target: 'electron-main'
}

/**
 * Adjust mainConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, process.env.IS_NODE_MODULE_PATH + '../static').replace(/\\/g, '\\\\')}"`
    })
  )
}

/**
 * Adjust mainConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  mainConfig.plugins.push(
    new BabiliWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  )
}

module.exports = mainConfig
