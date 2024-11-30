// @ts-check
export { default } from './defaultConfig.ts'

/**
 * OR if wanting to add additional logic with TS's help
 *
 * import defaultConfig from './defaultConfig.ts'
 * import tsEslint from 'typescript-eslint'
 *
 * export default tsEslint.config(...defaultConfig)
 *
 * OR without TS's help
 *
 * export default [...defaultConfig]
 */
