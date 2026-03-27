import { defineConfig } from 'eslint/config';
export declare const configs: {
    all: import("eslint/config").Config[];
    pluginJs: import("eslint/config").Config[];
    globalSetup: import("eslint/config").Config[];
    typescript: import("eslint/config").Config[];
    disableTypeChecking: (files: string[]) => ReturnType<typeof defineConfig>;
};
