module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
}
