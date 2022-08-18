module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
