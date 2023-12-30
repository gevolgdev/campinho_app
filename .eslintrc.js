module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    curly: 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    semi: 0, // Disallow semicollons
    'jsx-quotes': [1, 'prefer-single'], // JSX Single Quotes
  },
};
