const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: './scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/Taiwan-Tourguide/',
        clean: true
    },
    // devServer: {
    //     historyApiFallback: true
    // },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.(scss|sass)/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'img': path.resolve(__dirname, 'src/assets/images'),
            'font': path.resolve(__dirname, 'src/assets/fonts'),
            '@img': path.resolve(__dirname, 'src/assets/images'),
            '@font': path.resolve(__dirname, 'src/assets/fonts'),
            '@root': path.resolve(__dirname, 'src'),
            '@component': path.resolve(__dirname, 'src/components'),
            '@service': path.resolve(__dirname, 'src/service'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@views': path.resolve(__dirname, 'src/views')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }]
                ],
            }
        }),
    ]
}