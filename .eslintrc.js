module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "indent": [
        "error",
        2
    ],
    "semi": [
        "error",
        "always"
    ],
    "no-trailing-spaces": 0,
    "keyword-spacing": 0,
    "no-unused-vars": 1,
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "eol-last": 0,
  }
};