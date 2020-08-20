const EtzEncryptor = require('../index')

const encryptorObject = EtzEncryptor
const isAnObject = encryptorObject.constructor === Object
const isObjectEmpty = Object.entries(encryptorObject).length

let encryptorObjectItems = Object.keys(encryptorObject)
const generateEncryptedTerminalPin = encryptorObjectItems.find((item) => item === 'generateEncryptedTerminalPin')
const maskEncryptedTerminalPin = encryptorObjectItems.find((item) => item === 'maskEncryptedTerminalPin')
const unmaskEncryptedTerminalPin = encryptorObjectItems.find((item) => item === 'unmaskEncryptedTerminalPin')


test('Expecting an Object called EtzEncryptor', () => {
  expect(isAnObject).toEqual(true)
})

test('EtzEncryptor Object must not be empty', () => {
  expect(isObjectEmpty).toBeGreaterThan(0)
})

test('Reference generateEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(generateEncryptedTerminalPin).toEqual('generateEncryptedTerminalPin')
})

test('Reference maskEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(maskEncryptedTerminalPin).toEqual('maskEncryptedTerminalPin')
})

test('Reference unmaskEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(unmaskEncryptedTerminalPin).toEqual('unmaskEncryptedTerminalPin')
})
