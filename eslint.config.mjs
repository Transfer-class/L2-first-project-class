import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // ignore files
  {
    ignores: ['**/node_modules/', 'dist'],
  },

  {
    languageOptions: {
      globals: {
        ...global.node,
        process: 'readonly',
      },
    },
  },

  // here are my custom rules
  {
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
    },
  },
  {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  },
);
