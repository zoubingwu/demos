var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')


module.exports = {
    context: __dirname,
    entry: {
        main: './src/app.js',
    },
    output: {
        path: './dist/',
        filename: 'js/[name].bundle.js',
        publicPath: ''
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test:/\.(png|jpg|gif|svg)/,
                loader: 'file-loader',
                query: {
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader',
            }
        ],
    }
};
