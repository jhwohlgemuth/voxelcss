'use strict';

module.exports = {
    parser: require('postcss-safe-parser'),
    plugins: [
        require('postcss-cssnext')({browsers: 'last 2 versions'}),
        require('cssnano')(),
        require('postcss-reporter')({clearReportedMessages: true})
    ]
}
