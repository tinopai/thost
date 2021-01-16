module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'prettier',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint'],
    rules: {},
}
