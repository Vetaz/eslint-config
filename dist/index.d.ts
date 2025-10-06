import { defineConfig } from 'eslint/config';
export declare const configs: {
    all: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
    pluginJs: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
    globalSetup: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
    typescript: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
    disableTypeChecking: (files: string[]) => ReturnType<typeof defineConfig>;
};
