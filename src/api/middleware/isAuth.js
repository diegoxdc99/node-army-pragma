const logger = require('../../loaders/logger')

module.exports = (req, res, next) => {
  logger.info('Trying to validate if authenticated')
  req.user = {}
  req.user.isAuth = true
  next()
}
