module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['react-app', 'react-app/jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  }
}
