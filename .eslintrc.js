module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: [
      'warn',
      2,
      { SwitchCase: 1 },
    ],
    quotes: [
      'warn',
      'single'
    ],
    semi: [
      'warn',
      'never'
    ],
    'react/jsx-no-target-blank': 0,
    'no-console': 0,
    'object-curly-spacing': ['error', 'always'],
    // 'linebreak-style': ['error', 'unix'],
    'react/display-name': 0,
    'react/prop-types': 0
  }
};
