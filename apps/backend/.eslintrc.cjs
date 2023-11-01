module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    'no-unused-vars': 'off',
    "unicorn/filename-case": 'off',
  },
  extends: ['plugin:@web-bee-ru/base'],
};