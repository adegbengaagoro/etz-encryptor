/**
* Copyright (c) 2020. Agoro, Adegbenga. B
* Twitter: adegbengaagoro
*/
'strict'

const { generateEncryptedTerminalPin, key16Bytes, isBase64 } = require('../lib/generateEncryptedTerminalPin')

test('generateEncryptedTerminalPin function must have arguments', () => {
  expect(generateEncryptedTerminalPin.length).toBeGreaterThan(0)
})

test('generateEncryptedTerminalPin function must only take 2 arguments', () => {
  expect(generateEncryptedTerminalPin).toHaveLength(2)
})

test('generateEncryptedTerminalPin function must not return undefined ', () => {
  expect(generateEncryptedTerminalPin('6543', 'yYx^Br&D@&403ljRsJojNK6T5JuJdU')).toBeDefined()
})

test('key16Bytes function must have arguments', () => {
  expect(key16Bytes.length).toBeGreaterThan(0)
})

test('key16Bytes function must only take 1 argument', () => {
  expect(key16Bytes).toHaveLength(1)
})

test('key16Bytes function must not return null ', () => {
  expect(key16Bytes('string')).not.toEqual(null)
})

test('key16Bytes function must not return undefined ', () => {
  expect(key16Bytes('string')).toBeDefined()
})

test('key16Bytes function must return a 16 bytes string from etzSecretKey', () => {
  const sampleKey = key16Bytes('yYx^Br&D@&403ljRsJojNK6T5JuJdURZY4Y$g7MFyBO')
  const sampleKeyBuffer = Buffer.byteLength(sampleKey)
  expect(sampleKeyBuffer).toEqual(16)
})

test('isBase64 function must have arguments', () => {
  expect(isBase64.length).toBeGreaterThan(0)
})

test('isBase64 function must only take 1 argument', () => {
  expect(isBase64).toHaveLength(1)
})

test('isBase64 function must not return null ', () => {
  expect(isBase64('string')).not.toEqual(null)
})

test('isBase64 function must not return undefined ', () => {
  expect(isBase64('string')).toBeDefined()
})

test('Encrypted Output is a base64 string', () => {
  expect(isBase64('7Vv6uE8rA1h0mhpyB4CRRw==')).toEqual(true)
})
