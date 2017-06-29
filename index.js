const path = require('path')
const shell = require('shelljs')

/**
 * Install the dependeny with yarn or npm
 *
 * @param  {string} moduleName name of the module
 * @return {object}            shelljs result with code, stderr and stdout
 */
const installDependency = (moduleName) => {
  if (shell.which('yarn')) {
    // install it with yarn
    return shell.exec(`yarn add ${moduleName}`, { silent: true })
  }

  // install it with npm
  return shell.exec(`npm install ${moduleName}`, { silent: true })
}

/**
 * resolves the path to the node_modules
 *
 * @param  {string} moduleName name of the module
 * @return {any}               resolved node_module
 */
const resolveNodeModule = (moduleName) => {
  return require(path.join(__dirname, '..', moduleName))
}

/**
 * dynamic module
 * returns the required module
 * or install it and require the module
 *
 * @param  {string}  moduleName name of the module
 * @return {promise}            promise with the module
 */
module.exports = (moduleName) => new Promise((resolve, reject) => {
  try {
    // is it already installed
    resolve(resolveNodeModule(moduleName))
  } catch (err) {
    console.log(`module '${moduleName}' is not installed. Let´s install it`)
  }

  // install dependency
  if (installDependency(moduleName).code !== 0) {
    // error while installing the module
    reject(new Error(`failed to install ${moduleName}`))
  }

  // return required module
  resolve(resolveNodeModule(moduleName))
})
