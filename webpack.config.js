const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['env', 'stage-3'] }
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'atoms.js',
        // the library and libraryTarget are required since this is a library that is used by other
        // applications. If we dont add these keys, the import does not work.
        library: 'atoms',
        libraryTarget: 'umd'
    }
};