/**
 * Copyright (c) 2020. Agoro, Adegbenga. B
 * Twitter: @adegbengaagoro
 */
'strict'

const Crypto = require('crypto')
const checkBase64 = require('is-base64')

/**
 * Generates an encrypted terminal pin using AES-128-CBC encryption.
 * 
 * @param {string} plainPin - The plain text pin to be encrypted.
 * @param {string} etzSecretKey - The secret key provided by Etranzact.
 * @returns {string|Error} - The encrypted pin in Base64 format or an error if encryption fails.
 */
const generateEncryptedTerminalPin = (plainPin, etzSecretKey) => {
  try {
    const encryptionkey = key16Bytes(etzSecretKey)

    let cipher = Crypto.createCipheriv('aes-128-cbc', encryptionkey, encryptionkey)
    cipher.setAutoPadding(true)
    let encryptedTerminalPin = cipher.update(plainPin, 'utf8')
    encryptedTerminalPin += cipher.final('base64')

    return encryptedTerminalPin
  } catch (error) {
    return error
  }
}

/**
 * Generates a 16-byte encryption key from the Etranzact secret key.
 * 
 * @param {string} etzSecretKey - The secret key provided by Etranzact.
 * @returns {string|Error} - A 16-byte string derived from the secret key or an error if slicing fails.
 */
function key16Bytes(etzSecretKey) {
  try {
    return etzSecretKey.slice(0, 16)
  } catch (error) {
    return error
  }
}

/**
 * Checks if the provided encrypted output is in Base64 format.
 * 
 * @param {string} encryptedOutput - The encrypted output to be validated.
 * @returns {boolean|Error} - True if the output is in Base64 format, false otherwise, or an error if validation fails.
 */
function isBase64(encryptedOutput) {
  try {
    return checkBase64(encryptedOutput)
  } catch (error) {
    return error
  }
}

module.exports = { generateEncryptedTerminalPin, key16Bytes, isBase64 }