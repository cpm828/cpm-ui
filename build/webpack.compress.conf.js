/*
 * @Author: chenpengmin
 * @Date: 2020-01-21 15:57:53
 * @LastEditors  : chenpengmin
 * @LastEditTime : 2020-01-21 17:11:17
 * @Description: 基于webpack打包编译子组件js、css，实现整包导入
 */

'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const packageJson = require('../src/package.json')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

// 配置js插件版本说明
const Y = new Date().getFullYear()
const M = ('0' + (new Date().getMonth() + 1)).slice(-2)
const D = ('0' + new Date().getDate()).slice(-2)
const versionDesc =
  '/*!\n' +
  ' * cpm-ui v' + packageJson.version + ' (https://github.com/cpm828/cpm-ui)\n' +
  ' * (c) ' + Y + '-' + M + '-' + D + '\n' +
  ' * Released under the MIT License.\n' +
  ' */'

// 基于webpack.base.conf.js来生成一个压缩组件库的配置
delete baseWebpackConfig.entry
const compressWebpackConfig = merge(baseWebpackConfig, {
  // 输入:
  entry: {
    app: './src/index.js'
  },
  // 输出:
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'cpm-ui.js'
  },
  devtool: false,
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // 压缩js
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false
    }),
    // 使用ExtractTextPlugin插件extract-text-webpack-plugin打包独立成独立css文件
    new ExtractTextPlugin({
      filename: 'cpm-ui.css'
    }),
    // 压缩css
    new OptimizeCSSPlugin(),
    // 添加版本
    new webpack.BannerPlugin({
      banner: versionDesc, // 注释
      entryOnly: true // 只在chunks文件中添加
    })
  ]
})

module.exports = compressWebpackConfig
