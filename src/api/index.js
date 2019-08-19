const express = require('express')
const users = require('./routes/user')

module.exports = () => {
  const app = express.Router()
  users(app)
  return app
}
