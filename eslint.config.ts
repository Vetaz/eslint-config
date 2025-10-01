import { configs } from './src/index'
import { defineConfig } from 'eslint/config'

export default defineConfig({ ignores: ['dist/**', 'eslint.config.ts'] }, configs.all)
