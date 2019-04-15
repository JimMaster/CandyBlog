const path = require('path')
const MainfestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    output: {
        filename: '[name].build23.js',
        path: path.resolve(__dirname, 'tst')
    },
    devtool: 'inline-source-map', // 追踪源文件错误位置
    devServer: {
        contentBase: './tst',
        port: 8888,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin({path: ['dist']}),
        new MainfestPlugin({
            fileName: 'mainfest.json'
        }),
        new HtmlWebpackPlugin({
            title: 'output manager'
        }),
        new webpack.NamedModulesPlugin(), // 查询更改文件的依赖
        new webpack.HotModuleReplacementPlugin() // webpack内置热重载
    ]
}