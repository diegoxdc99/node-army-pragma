require('dotenv').config()
const { sign } = require('../utils/jwt')
const config = require('../config')

const payload = {
  username: 'Usernaname user',
  age: 99
}

// Creating all properties manually
// const payloadPermissions = {
//   username: 'Usernaname user',
//   age: 99,
//   permissions: [
//     'user:create'
//   ]
// }

// Create object with object function
// const payloadPermissions = Object.assign(
//   payload,
//   {
//     permissions: [
//       'user:create'
//     ]
//   })

// Create object with spread operator
const payloadPermissions = {
  ...payload,
  permissions: [
    'user:create'
  ]
}

const secret = sign(payload, config.auth.secret)
const secretPermissions = sign(payloadPermissions, config.auth.secret)

console.log(`TOKEN SIMPLE: ${secret}`)
console.log(`TOKEN PERMISSIONS : ${secretPermissions}`)
