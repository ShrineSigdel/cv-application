module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',
    'max-len': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
