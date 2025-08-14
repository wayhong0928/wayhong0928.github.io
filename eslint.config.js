import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

export default [
  // 忽略建置輸出和依賴目錄
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '.vscode/**',
      '.idea/**',
      'coverage/**',
      '.nyc_output/**',
      '*.min.js',
      '*.min.css',
      'bundle-*.js',
      'vendor/**',
      'public/**',
      '.cache/**',
      '.parcel-cache/**',
      '.turbo/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      '*.config.cjs',
      // 排除某些特定檔案但保留主要配置檔案
      '!astro.config.mjs',
      '!tailwind.config.ts',
      '!eslint.config.js',
      '!prettier.config.cjs',
    ],
  },

  eslint.configs.recommended,

  // TypeScript 和 JavaScript 文件配置
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Node.js 全域變數
        process: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',

        // 瀏覽器全域變數
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        queueMicrotask: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        matchMedia: 'readonly',
        reportError: 'readonly',

        // Web APIs
        Node: 'readonly',
        Element: 'readonly',
        HTMLElement: 'readonly',

        // React DevTools
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-undef': 'error',
      'no-unused-vars': 'off', // 使用 TypeScript 版本
    },
  },

  // Astro 文件配置
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      globals: {
        // Astro 全域變數
        Astro: 'readonly',

        // 瀏覽器全域變數 (用於 client:* 指令)
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];
