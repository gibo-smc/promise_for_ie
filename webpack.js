/* ----------------------------------------------------------------------------
全環境共通設定
---------------------------------------------------------------------------- */
const webpack = require('webpack')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = (env, argv) => {

  const isDevelopment = argv.mode === 'development'

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : '', // source map
    plugins: [
      new ForkTsCheckerWebpackPlugin(
        {
          silent: true,
          formatter: 'codeframe',
          checkSyntacticErrors: false // 構文エラー検知はts-loaderに任せる
        }
      )
    ],
    entry: {
      main: './src/index.ts',
    },
    output: {
      filename: `[name].js`,
      path: path.resolve(__dirname, 'docs/js')
    },
    module: {
      rules:[
        {
          test: /\.(ts)$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                happyPackMode: false
              }
            }
          ]
        },
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      publicPath: '/js/',
      open: false,
      watchContentBase: true,
      host: '0.0.0.0',
      port: '3000'
    }
  }
}