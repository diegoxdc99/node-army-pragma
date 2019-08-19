const logger = require('../../loaders/logger')

module.exports = (req, res, next) => {
  logger.info('Intentando validar si esta auntenticado')
  req.user = {}
  req.user.isAuth = true
  next()
}
