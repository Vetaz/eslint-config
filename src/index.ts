import globals from 'globals'
import pluginJs from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tsEslint from 'typescript-eslint'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'

const pluginJsConfig = defineConfig(
  {
    files: ['**/*.{js?(x),m(j|t)s,cjs,ts?(x)}'],
    ...pluginJs.configs.recommended,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- it is from a js package
  comments.recommended,
  {
    rules: {
      '@eslint-community/eslint-comments/require-description': 'error',
    },
  }
)

const globalSetup = defineConfig({
  files: ['**/*.{js?(x),m(j|t)s,cjs,ts?(x)}'],
  name: 'Jordi/TypeScript/globals-setup',
  languageOptions: { globals: { ...globals.browser, ...globals.jquery, google: 'readonly' } },
})

const typescript = defineConfig({
  name: 'Jordi/TypeScript',
  files: ['**/*.ts?(x)', '**/*.mts'],
  languageOptions: { parserOptions: { project: true } },
  extends: [tsEslint.configs.strictTypeChecked, tsEslint.configs.stylisticTypeChecked],
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
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
})

const disableTypeChecking = (files: string[]): ReturnType<typeof defineConfig> =>
  defineConfig({
    files,
    extends: [tsEslint.configs.disableTypeChecked],
  })

export const configs = {
  all: defineConfig(pluginJsConfig, globalSetup, typescript),
  pluginJs: pluginJsConfig,
  globalSetup,
  typescript,
  disableTypeChecking,
}
