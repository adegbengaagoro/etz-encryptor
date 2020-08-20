'use strict'
const generateEncryptedTerminalPin = require('./lib/generateEncryptedTerminalPin')
const maskEncryptedTerminalPin = require('./lib/maskEncryptedTerminalPin')
const unmaskEncryptedTerminalPin = require('./lib/unmaskEncryptedTerminalPin.js')
/**
 * - Bundle all the modules into a single object for easy accessibility
 */

const EtzEncryptor = {
  generateEncryptedTerminalPin,
  maskEncryptedTerminalPin,
  unmaskEncryptedTerminalPin
}


module.exports = EtzEncryptor
