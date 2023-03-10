module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': ['error', {
      ignores: ['Index', 'About', 'Project'],
    }],
    'max-len': ['error', { code: 150, ignoreRegExpLiterals: true }],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
