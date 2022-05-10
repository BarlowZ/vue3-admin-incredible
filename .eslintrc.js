/*
 * @Descripttion: 
 * @version: 1.5
 * @Author: qian
 * @Date: 2022-05-11 00:28:20
 * @LastEditors: qian
 * @LastEditTime: 2022-05-11 00:44:20
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 0,
    'space-before-function-paren': 0
  }
}
