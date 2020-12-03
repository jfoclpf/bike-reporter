const fse = require('fs-extra')
const path = require('path')

module.exports = function (context) {
  console.log(context.hook + ': copying credentials')

  const projectRoot = path.resolve(path.dirname(context.scriptLocation), '..')

  const fileOriginFullPath = path.join(projectRoot, 'keys', 'credentials.js')
  const fileDestFullPath = path.join(projectRoot, 'www', 'js', 'credentials.js')

  fse.copySync(fileOriginFullPath, fileDestFullPath)

  const consoleMsg = 'copied ' +
    path.relative(projectRoot, fileOriginFullPath) + ' -> ' +
    path.relative(projectRoot, fileDestFullPath)

  console.log(consoleMsg)
}
