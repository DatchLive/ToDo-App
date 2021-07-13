module.exports = {
  root: true, //上位ディレクトリの.eslintrcを探すのを停止する。(トップディレクトリのeslintrcに指定する)
  env: { es2021: true, browser: true, jest: true, node: true }, //実行環境の指示
  parser: "@typescript-eslint/parser", //TypeScriptをLintできるようにする。
  parserOptions: { project: "./tsconfig.json" },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "prettier",s
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }], //console.logを禁止。console.warn, console.info, console.errorは許可
    "react/prop-types": "off", //react prop TypesをOFF TypeScript側で確認している為
    "react/react-in-jsx-scope": "off", //Reactのimport不要
    // "react/display-name": "error", ←※理解する！！
    "react-hooks/rules-of-hooks": "error", //Hooksのルールを強制する。
    "react-hooks/exhaustive-deps": "warn", //Hooksのルールを強制する。
    "import/newline-after-import": "error", //import or require文の後に1行空ける。
    // "import/no-default-export": "error", //Default Exportを禁止 ←※エラー
    // "simple-import-sort/imports": "error", ←※エラー
    // "simple-import-sort/exports": "error", ←※エラー
  },
};
