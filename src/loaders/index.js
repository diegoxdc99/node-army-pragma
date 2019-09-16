const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')
require('./passport')

module.exports = async (app) => {
  await expressLoader(app)
  await mongooseLoader()
}
