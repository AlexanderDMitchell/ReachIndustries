module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
    'prettier'
  ],
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    // enables eslint-plugin-prettier and eslint-config-prettier
    // this will display prettier warns as ESLint warns
    // make sure this is always the last configuration in the extends array
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      // allows for the parsing of JSX
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    'constructor-super': 'warn',
    curly: 'warn',
    'dot-notation': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
    eqeqeq: ['warn', 'smart'],
    'guard-for-in': 'warn',
    'id-match': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'warn',
    'no-empty': 'warn',
    'no-eval': 'warn',
    'no-inner-declarations': 'off',
    'no-irregular-whitespace': 'off',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-shadow': 'off',
    'no-throw-literal': 'warn',
    'no-undef-init': 'warn',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'object-shorthand': 'warn',
    'prefer-template': 'warn',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/boolean-prop-naming': 'warn',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'always', children: 'ignore' }
    ],
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'require-yield': 'off'
  },
  settings: {
    react: {
      version: '17.0.2'
    }
  }
}
