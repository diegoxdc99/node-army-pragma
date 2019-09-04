const bodyParser = require('body-parser')
const passport = require('passport')
const routes = require('../api')
const helmet = require('helmet')

module.exports = async (app) => {
  app.use(helmet()) // Secure app by setting various HTTP headers
  app.use(bodyParser.json()) // Middleware to parse the body into a json
  app.use(passport.initialize())

  app.get('/status', (req, res) => { // Path to know the status of the server
    res.status(200).end()
  })

  app.use('/', routes())
}
