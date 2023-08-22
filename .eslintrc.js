'use strict'

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    // This is to disable requiring a babel config file be found
    requireConfigFile: false,
  },
  extends: ['standard', 'standard-jsx', 'plugin:prettier/recommended'],
  plugins: ['no-only-tests', 'prettier', 'svg-jsx'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-spacing': ['error', 'always'],

    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    'react/prop-types': 'warn',

    'react/sort-comp': [
      'error',
      {
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
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // This is for the mocha tests. It should be an override, but they dont work for me
    // http://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
    'no-unused-expressions': 0,
    'no-only-tests/no-only-tests': 'error',

    'arrow-parens': ['error', 'always'], // https://eslint.org/docs/rules/arrow-parens
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],

    // Disallow prettier errors to show as eslint warnings
    'prettier/prettier': 'off',

    // These need to change to errors and be fixed through the code
    'array-callback-return': ['warn', { checkForEach: true }],
    'no-prototype-builtins': 'warn',
    'react/jsx-handler-names': 'off',
    'react/no-deprecated': 'warn',
    'prefer-regex-literals': 'warn',
    'import/no-named-default': 'off',
    'import/named': 2,

    'svg-jsx/react-camel-case': 'error',
  },
  // from: https://github.com/eslint/eslint/issues/11072
  overrides: [
    {
      files: ['**/tests/**', '**/spec.js', '**/__mocks/**'],
      env: { mocha: true, jest: true, jasmine: true },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    sinon: true,
    expect: true,
    chai: true,
  },
}
