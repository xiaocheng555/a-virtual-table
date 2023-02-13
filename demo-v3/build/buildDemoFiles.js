import fs from 'fs'
import path from 'path'

const demoDir = path.resolve(__dirname, '../src/views')

function buildDemoFiles () {
  const files = fs.readdirSync(demoDir)
  const jsonData = {}
  files.forEach(function (fileName) {
    const filePath = path.join(demoDir, fileName)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && fileName.endsWith('.vue')) {
      const name = fileName.replace(/.vue$/, '')
      const data = fs.readFileSync(filePath, 'utf-8')
      jsonData[name] = data
    }
  })
  return jsonData
}


export default buildDemoFiles
