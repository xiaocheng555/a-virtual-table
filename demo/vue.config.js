const path = require('path')
const buildDemoFiles = require('./build/buildDemoFiles.js')

const isProduction = process.env.NODE_ENV === 'production'
const demoFiles = buildDemoFiles()

module.exports = {
  publicPath: isProduction ? '././' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env']['demoFiles'] = demoFiles
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        'a-virtual-table': path.resolve('../src/index')
      }
    }
  }
}
