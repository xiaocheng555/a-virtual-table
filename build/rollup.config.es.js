import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'es',
    file: './dist/a-virtual-table.esm.js',
    name: 'a-virtual-table',
    sourcemap: false
  }
})

export default config
