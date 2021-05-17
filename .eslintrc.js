'use strict'

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    // This is to disable requiring a babel config file be found
    requireConfigFile: false,
  },
  extends: ['standard', 'standard-jsx'],
  plugins: ['no-only-tests'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],

    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],

    // This is for the mocha tests. It should be an override, but they dont work for me
    // http://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
    'no-unused-expressions': 0,
    'no-only-tests/no-only-tests': 'error'
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
