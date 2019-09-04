const bodyParser = require('body-parser')
const routes = require('../api')

module.exports = async (app) => {
  app.get('/status', (req, res) => { // Path to know the status of the server
    res.status(200).end()
  })

  app.use(bodyParser.json()) // Middleware to parse the body into a json
  app.use('/', routes())
}
