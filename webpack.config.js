const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const devMode = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

module.exports={
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'source-map',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    resolve:{
        extensions: [".js", ".jsx", ".jsonx", ".ts", ".tsx"]
    },
    module: {
        rules:[
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
        ]
    }
}