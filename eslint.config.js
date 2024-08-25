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
      "semi": ["error", "always"],
      "quotes": ["error", "single", { "allowTemplateLiterals": true }],
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
];
