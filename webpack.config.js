// const { ESBuildPlugin } = require('esbuild-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/test.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx$/,
      //   loader: 'esbuild-loader',
      //   // options: {
      //   //   loader: 'tsx', // Remove this if you're not using JSX
      //   //   target: 'es2015' // Syntax to compile to (see options below for possible values)
      //   // }
      // }
    ]
  },
  // plugins: [
  //   new ESBuildPlugin()
  // ]
};
