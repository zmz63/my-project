module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue'],
  root: true,
  rules: {
    /**
     * Eslint config
     */

    'no-unused-vars': 'warn',
    'camelcase': 'warn',
    'consistent-this': 'warn',
    'line-comment-position': 'warn',
    'no-inline-comments': 'warn',
    'no-useless-constructor': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'arrow-body-style': 'warn',
    'eqeqeq': 'warn',
    'lines-between-class-members': 'warn',
    'no-lonely-if': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'spaced-comment': 'warn',

    /**
     * Vue config
     */

    'vue/component-tags-order': [
      'warn',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'always',
        },
        math: 'always',
        svg: 'always',
      },
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',

    /**
     * Prettier config
     */

    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 100,
        quoteProps: 'consistent',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
};
