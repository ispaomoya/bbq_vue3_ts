module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: 'espree', // <-
    ecmaVersion: 2022, // <-可以支持2022年语法
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 'vue/script-setup-uses-vars': 'error',
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['error'],
  },
}
