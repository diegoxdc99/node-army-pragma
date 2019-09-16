const express = require('express')
const passport = require('passport')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const config = require('../../config')

const route = express.Router()

const { users } = require('../../controller')

module.exports = (app) => {
  app.use('/users', route) // Creating a user route

  route.route('/')
    .post(users.createUser)
  // Specific routes for the user /users/*
  route.route('/me')
    .get(users.getMe)
    .post(passport.authenticate('basic', { session: false }), users.postMe)

  // Single token
  route.post('/metoken', auth(config.auth), users.postMe)
  // Token with a permissions object
  route.post('/metokenpermision', auth(config.auth), guard.check(['user:create']), users.postMe)
}
