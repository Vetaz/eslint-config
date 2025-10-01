import globals from 'globals';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';
const pluginJsConfig = defineConfig({
    files: ['**/*.{js?(x),m(j|t)s,cjs,ts?(x)}'],
    ...pluginJs.configs.recommended,
});
const globalSetup = defineConfig({
    files: ['**/*.{js?(x),m(j|t)s,cjs,ts?(x)}'],
    name: 'Jordi/TypeScript/globals-setup',
    languageOptions: { globals: { ...globals.browser, ...globals.jquery, google: 'readonly' } },
});
const typescript = defineConfig({
    name: 'Jordi/TypeScript',
    files: ['**/*.ts?(x)', '**/*.mts'],
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
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
});
export const configs = {
    all: defineConfig(pluginJsConfig, globalSetup, typescript),
    pluginJs: pluginJsConfig,
    globalSetup,
    typescript,
};
