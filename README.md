# Etz-Encryptor

Etz-Encryptor is a NodeJS package that allows you automatically generate the encrypted pin which you are to send with your Terminal ID when making your API calls to Etranzact's SwitchIT Infrastructure.

You can also find the etz-encryptor package on NPM, click <a href="https://www.npmjs.com/package/etz-encryptor" target="_blank">**HERE**</a>

### Installation

To install the Etz-Encryptor package, all you have to do is run the command below in your terminal.

```bash
$ npm install etz-encryptor
```

### Context

The eTranzact SwitchIT infrastructure is an API designed for eTranzact's Corporate Payment Systems. When fully integrated, it enables clients to:

Perform fund transfers
Pay utility bills
Execute bulk payments to multiple recipients
To access the API, eTranzact provides the following credentials:

Terminal ID
PIN
MasterKey for PIN encryption
Traditionally, eTranzact offers encryption references primarily for PHP, C#, and Java.

This is where etz-encryptor comes in—it extends the same encryption functionality to the Node.js community, making it easier for developers to integrate with the SwitchIT infrastructure.

### Usage

Reference etz-encryptor in your project

```javascript
const etzEncryptor = require('etz-encryptor)
```

Utilize any of the available methods

```javascript
const encryptedPin = etzEncryptor.generateEncryptedTerminalPin(plainPin, etzSecretKey)
```

This method takes 2 arguments, which are:

- **plainPin** - The pin provided by eTranzact
- **etzSecretKey** - The MasterKey provided by eTranzact

Example:

```javascript
etzEncryptor.generateEncryptedTerminalPin('6543', 'yYx^Br&D@&403ljRsJojNK6T5JuJdU')
```

### Output

The **generateEncryptedTerminalPin** method will output an encrypted string which will be in Base64 format

Example:

```
7Vv6uE8rA1h0mhpyB4CRRw==
```

### To Do

This package is designed for projects where manually entering the PIN each time is not practical. To streamline the process, storing the PIN securely in a database is recommended.

However, simply saving the encrypted PIN in the database is not advisable. To enhance security, the following additional methods are planned:

- **maskEncryptedTerminalPin** (An encryption action to further hide the real Encrypted Pin)
- **unmaskEncryptedTerminalPin** (An encryption action to decrypt the data)

### Contribution

You are most welcome to provide any inputs that can improve the package.
