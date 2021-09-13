const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");
const ImageMinimazerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|gif|mp3|mp4)/i,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new ImageMinimazerPlugin({
            minimizerOptions: {
                plugins: [
                    //["gifscale", { interlaced: true }],
                    ["jpegtran", { progressive: true }]
                ]
            }
        })
    ]
};