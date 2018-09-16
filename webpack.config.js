const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './src/index.js',
    externals: {
        'styled-components': {
            commonjs: 'styled-components',
            commonjs2: 'styled-components',
            amd: 'styled-components'
        }
    },
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
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'atoms.js',
        // the library and libraryTarget are required since this is a library that is used by other
        // applications. If we dont add these keys, the import does not work.
        library: 'atoms',
        libraryTarget: 'umd'
    },
    resolve: { extensions: ['*', '.js', '.jsx'] }
};