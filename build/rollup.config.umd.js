import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'umd',
    file: './dist/a-virtual-table.umd.js',
    name: 'a-virtual-table',
    sourcemap: false
  }
})

export default config
