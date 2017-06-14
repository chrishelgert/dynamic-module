const shelljs = require('shelljs')
const dynamicModule = require('../')

describe('dynamic-module', () => {
  test('returns the module from filesystem', () => (
    dynamicModule('shelljs')
      .then((shelljs) => {
        expect(shelljs).toBeDefined()
      })
      .catch((err) => {
        expect(err).toBeUndefined()
      })
  ))

  test('downloads the module with yarn', () => {
    shelljs.which = jest.fn(value => value === 'yarn')
    shelljs.exec = jest.fn(() => ({ code: 0 }))

    return dynamicModule('testmodule')
      .catch(() => {
        expect(shelljs.exec).toHaveBeenCalledWith('yarn add testmodule', { silent: true })
      })
  })

  test('downloads the module with npm', () => {
    shelljs.which = jest.fn(value => value === 'npm')
    shelljs.exec = jest.fn(() => ({ code: 0 }))

    return dynamicModule('testmodule')
      .catch(() => {
        expect(shelljs.exec).toHaveBeenCalledWith('npm install testmodule', { silent: true })
      })
  })

  test('rejects the promise if the installation of the module failed', () => {
    shelljs.which = jest.fn(value => value === 'npm')
    shelljs.exec = jest.fn(() => ({ code: 1 }))

    return dynamicModule('testmodule')
      .catch((err) => {
        expect(err).toEqual(new Error(`failed to install testmodule`))
      })
  })
})
