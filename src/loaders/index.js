const expressLoader = require('./express')
require('./passport')

module.exports = async (app) => {
  await expressLoader(app)
}
