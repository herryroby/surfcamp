import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  js.configs.recommended,
  {
    // TypeScript configuration
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  prettier,
];

export default eslintConfig;
