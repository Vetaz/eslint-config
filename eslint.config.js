// @ts-check

// option 1
// export { default } from './defaultConfig'

// option 2
import defaultConfig from './defaultConfig'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(...defaultConfig)

// option 3
// import defaultConfig from './defaultConfig'
// export default [...defaultConfig]
