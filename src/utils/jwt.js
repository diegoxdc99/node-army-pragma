const jwt = require('jsonwebtoken')

function sign (payload, secret) {
  return jwt.sign(payload, secret)
}

function verify (token, secret) {
  return jwt.verify(token, secret)
}

module.exports = {
  sign,
  verify
}
