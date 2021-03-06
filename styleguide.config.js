const path = require('path');

module.exports = {
    components: 'src/**/index.{js,jsx}',
    ignore: [
        'src/index.js'
    ],
    styleguideComponents: {
        Wrapper: path.join(__dirname, './styleguide/ThemeWrapper')/*,
        ReactComponentRenderer: path.join(__dirname, 'styleguide/components/CustomReactComponentRenderer'),
        StyleGuideRenderer: path.join(__dirname, 'styleguide/components/CustomStyleGuideRenderer')*/
    },
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules'
                },
                {
                    test: /\.svg$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=100000&mimetype=application/octet-stream"
                }
            ]
        },
        resolve: {
            alias: {
                'react-styleguidist': path.join(__dirname, '../../')
            }
        }
    },
    compilerConfig: {
        transforms: {
            dangerousTaggedTemplateString: true
        }
    },
    theme: {
        fontFamily: {
            base: 'Poppins'
        }
    },
    require: [
        path.join(__dirname, 'styleguide/CustomStyles.css')
    ]
};