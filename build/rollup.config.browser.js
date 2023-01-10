import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    format: 'iife',
    file: './dist/a-virtual-table.min.js',
    name: 'AVirtualTable',
    sourcemap: false
  }
})

config.plugins.push(terser())

export default config
