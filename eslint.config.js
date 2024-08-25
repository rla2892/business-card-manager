// eslint.config.js

const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // 여기에 프로젝트에 필요한 규칙을 추가하세요
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];
