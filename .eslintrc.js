const ALLOWED_MAGIC_NUMBERS  = [-1, 0, 1, 2, 3, 10, 100, 1000];

module.exports = {
    parser: 'babel-eslint',
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        sinon: true,
        localStorage: true
    },
    extends: 'omaha-prime-grade',
    plugins: [
        'html'
    ],
    rules: {
        'no-magic-numbers': ['warn', {ignore: ALLOWED_MAGIC_NUMBERS}],
    }
};
