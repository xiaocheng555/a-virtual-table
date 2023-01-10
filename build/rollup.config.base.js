import resolve from 'rollup-plugin-node-resolve'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import autoprefixer from 'autoprefixer'
import vue from 'rollup-plugin-vue'
// import babel from 'rollup-plugin-babel'
import babel from '@rollup/plugin-babel'

export default {
  input: './src/index.js',
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.vue'] }),
    eslint({
      exclude: 'node_modules/**'
    }),
    vue({
      style: {
        postcssPlugins: [autoprefixer]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue']
      // babelHelpers: 'bundled',
      // presets: ['@babel/preset-env']
      // plugin: ['@vue/babel-plugin-jsx']
    }),
    commonjs()

  ],
  // 外部模块
  external: ['vue', 'lodash']
}
