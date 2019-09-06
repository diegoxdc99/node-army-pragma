const bodyParser = require('body-parser')
const passport = require('passport')
const helmet = require('helmet')
const routes = require('../api')

const errorHandler = (err, req, res, next) => {
  let statusCode = 500

  if (err.name === 'UnauthorizedError') statusCode = 403
  // Error handling for a custom error
  else if (err.name === 'UserNotPermissions') return res.status(403).send({ error: err.message })

  res.status(statusCode).send({ error: err.message })
}

module.exports = async (app) => {
  app.use(helmet()) // Secure app by setting various HTTP headers
  app.use(bodyParser.json()) // Middleware to parse the body into a json
  app.use(passport.initialize())

  app.get('/status', (req, res) => { // Path to know the status of the server
    res.status(200).end()
  })

  app.use('/', routes())
  app.use(errorHandler)
}
