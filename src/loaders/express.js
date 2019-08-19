const bodyParser = require('body-parser')
const routes = require('../api')

module.exports = async (app) => {
  app.get('/status', (req, res) => {
    res.status(200).end()
  })

  app.use(bodyParser.json())
  app.use('/', routes())
}
