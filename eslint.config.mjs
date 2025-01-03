import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // JavaScriptの推奨設定
  ...tseslint.configs.recommended, // TypeScriptの推奨設定
  pluginReact.configs.flat.recommended, // Reactの推奨設定

  // TypeScriptに関連する強制ルールの追加
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn", // 戻り値の型を明示化
      "@typescript-eslint/explicit-module-boundary-types": "warn", // モジュール境界に型を明示化
      "@typescript-eslint/no-explicit-any": "warn", // any型の使用を警告
      "@typescript-eslint/no-inferrable-types": "warn", // 推論可能な型に型指定を強制
    },
  },
];
