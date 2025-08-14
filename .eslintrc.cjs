module.exports = {
  root: true,
  env: { browser: true, es2023: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "astro", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended", // 讓 .astro 檔也能 lint
    "plugin:import/recommended", // import/exports 規則
    "plugin:import/typescript",
    "prettier", // 格式交給 Prettier，避免衝突
  ],
  settings: {
    "import/resolver": {
      // 讓 ESLint 也懂你的 TS alias（@/*）
      typescript: true,
      node: true,
    },
  },
  rules: {
    // 保持匯入順序一致（可自訂）
    "import/order": [
      "warn",
      { "newlines-between": "always", alphabetize: { order: "asc" } },
    ],
  },
  overrides: [
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
      rules: {},
    },
  ],
};
