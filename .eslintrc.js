module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential',
    // '@vue/standard',
    '@vue/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var-requires': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        component: 'always',
        normal: 'any',
        void: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.vue',
          '.jsx',
          '.js',
          '.tsx',
          '.ts',
        ],
      },
    },
  },
}
