const express = require('express')
const route = express.Router()

const { isAuth } = require('../middleware')
const { users } = require('../../controller')

module.exports = (app) => {
  app.use('/users', route) // Creating a user route

  // Specific routes for the user /users/*
  route.get('/me', users.getMe)
  route.post('/me', isAuth, users.postMe)
}
