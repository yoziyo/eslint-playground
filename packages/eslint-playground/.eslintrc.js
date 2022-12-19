module.exports = {
  "plugins": ['@yozi/yozi'],
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
      "@yozi/yozi/fix-my-name": 'error'
  },
  "ignorePatterns": [".eslintrc.js"],
}
