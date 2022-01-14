/*
 * @Description: description
 * @Date: 2022-01-12 15:29:14
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-13 14:21:57
 */
module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        semi: false,
        endOfLine: 'auto',
        trailingComma: 'none'
      }
    ]
  }
}
