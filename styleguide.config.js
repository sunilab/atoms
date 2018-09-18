const path = require('path');

module.exports = {
    components: 'src/**/index.{js,jsx}',
    ignore: [
        'src/index.js'
    ],
    styleguideComponents: {
        Wrapper: path.join(__dirname, './styleguide/ThemeWrapper')
    }
};