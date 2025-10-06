import { configs } from './src/index'
import { defineConfig } from 'eslint/config'

export default defineConfig({ ignores: ['dist/**'] }, configs.all, configs.disableTypeChecking(['eslint.config.ts']))
