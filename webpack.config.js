const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),

        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/css'), to: path.resolve(__dirname, 'dist/css') },
                { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')},
                { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets')},
                { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts')}
              ],
        })
    ],


}