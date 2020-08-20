/**
* Copyright (c) 2020. Agoro, Adegbenga. B
* Twitter: adegbengaagoro
*/
'strict'

const EtzEncryptor = require('../index')

const encryptorObject = EtzEncryptor
const isAnObject = encryptorObject.constructor === Object
const isObjectEmpty = Object.entries(encryptorObject).length

test('Expecting an Object called EtzEncryptor', () => {
  expect(isAnObject).toEqual(true)
})

test('EtzEncryptor Object must not be empty', () => {
  expect(isObjectEmpty).toBeGreaterThan(0)
})

test('Reference generateEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(encryptorObject).toHaveProperty('generateEncryptedTerminalPin')
})

test('Reference maskEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(encryptorObject).toHaveProperty('maskEncryptedTerminalPin')
})

test('Reference unmaskEncryptedTerminalPin module in EtzEncryptor Object', () => {
  expect(encryptorObject).toHaveProperty('unmaskEncryptedTerminalPin')
})
