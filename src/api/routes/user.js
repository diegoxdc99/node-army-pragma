const express = require('express')
const passport = require('passport')
const route = express.Router()

const { users } = require('../../controller')

module.exports = (app) => {
  app.use('/users', route) // Creating a user route

  // Specific routes for the user /users/*
  route.get('/me', users.getMe)
  route.post('/me', passport.authenticate('basic', { session: false }), users.postMe)
}
