const path = require('path');

module.exports = {
    entry: './client.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules',
        ],
        extensions: ['*', '.js', '.jsx', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};