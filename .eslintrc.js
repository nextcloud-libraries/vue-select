module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '!.*.js',
    '!docs/.vuepress',
    'docs/.vuepress/dist',
    'node_modules',
    'dist',
    'coverage',
    'yarn.lock',
  ],
}
