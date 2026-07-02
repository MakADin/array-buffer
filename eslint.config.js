import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import babelParser from "@babel/eslint-parser"

export default [
  js.configs.recommended,

  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React в вашем проекте
      },
    },
    rules: {
      'indent': ['error', 2], // Проверять отступы (2 пробела)
      'no-multi-spaces': 'error', // Запретить лишние пробелы
      'no-trailing-spaces': 'error', // Запретить пробелы в концах строк
      'eol-last': ['error', 'always'], // Пустая строка в конце файла
      'object-curly-spacing': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
    },
  },
];
