/**
 * Copyright (c) 2020. Agoro, Adegbenga. B
 * Twitter: adegbengaagoro
 */
'strict'

const Crypto = require('crypto')
const checkBase64 = require('is-base64')

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

// Generate a 16 bytes string from the Etranzact Secret Key
function key16Bytes(etzSecretKey) {
  try {
    return etzSecretKey.slice(0, 16)
  } catch (error) {
    return error
  }
}

// Check if Encrypted Pin is in Base64 format
function isBase64(encryptedOutput) {
  try {
    return checkBase64(encryptedOutput)
  } catch (error) {
    return error
  }
}


module.exports = { generateEncryptedTerminalPin, key16Bytes, isBase64 }
