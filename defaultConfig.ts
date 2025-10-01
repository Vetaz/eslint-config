import globals from 'globals'
import pluginJs from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tsEslint from 'typescript-eslint'

/** Allow to use .mts/.ts config in VSCode's extension */
// "eslint.runtime": "node",
// "eslint.options": {
//   "flags": ["unstable_native_nodejs_ts_config"]
// },
// "eslint.execArgv": ["--experimental-strip-types"]
// Or use jiti
export default defineConfig(
  { files: ['**/*.{js?(x),mjs,cjs,ts?(x)}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.jquery, google: 'readonly' } } },
  pluginJs.configs.recommended,
  {
    files: ['**/*.ts?(x)'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [tsEslint.configs.strictTypeChecked, tsEslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
    },
  }
)
