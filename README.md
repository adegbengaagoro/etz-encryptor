#Etz-Encryptor

Etz-Encryptor is a NodeJS package that allows you automatically generate the encrypted pin which you are to send with your Terminal ID when making your API calls to Etranzact's SwitchIT Infrastructure.

You can also find the etz-encryptor package on NPM, click <a href="#">**HERE**</a>

### Installation

To install the Etz-Encryptor package, all you have to do is run the command below in your terminal.

```bash
$ npm install etz-encryptor
```

### Context

The etranzact SwitchIT infrastructure is an API for eTranzact's Corporate Payment Systems which when fully integrated allows clients to carry out funds trnasfer, perform utility bill payments, bulk transfers to recipients etc.

In order to utilize the API, eTranzact will provide you with the following:

- Terminal ID
- A pin
- A MasterKey for pin Encryption

Traditionally, eTranzact will give you encryption references but they are focused on PHP, C# and Java.

This is where **etz-encryptor** comes in, it is focused on providing the same functionality to the NodeJS community

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

This package is designed for projects where the need to input the pin every time is not an option, therefore it would be good to store the pin within the database.

It will be unwise to just save the encrypted pin in your database, thus the plan to create the following additional methods:

- **maskEncryptedTerminalPin** (An encryption action to further hide the real Encrypted Pin)
- **unmaskEncryptedTerminalPin** (An encryption action to decrypt the data)

### Contribution

You are most welcome to provide any inputs that can improve the package.
