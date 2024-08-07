module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "eslint-plugin-jsx-a11y",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVestion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json>r",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],

  plugins: ["react", "react-refresh", "@typscript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
