'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-jsx'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    // This is for the mocha tests. It should be an override, but they dont work for me
    // http://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
    'no-unused-expressions': 0
  },
  env: {
    'browser': true,
    'node': true,
    'mocha': true
  },
  globals: {
    sinon: true,
    expect: true,
    chai: true
  }
}
