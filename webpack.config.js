/* eslint-disable n/prefer-global/process */
/* eslint-disable import/no-anonymous-default-export */

import TerserPlugin from 'terser-webpack-plugin'

export default {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'production',

  target: 'node',
  output: {
    filename: 'index.js',
  },

  optimization: {
    minimizer: [new TerserPlugin({extractComments: false})],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [{test: /\.ts$/, use: ['ts-loader']}],
  },
}
