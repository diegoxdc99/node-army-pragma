const logger = require('../loaders/logger')
const UserNotPermissions = require('../errors/UserNotPermissions')

const getMe = (req, res) => {
  logger.info('Use route getMe')
  res.json({ user: 'yo' })
}

const postMe = (req, res, next) => {
  logger.info(`Use route postMe`)
  logger.info(`info user: ${JSON.stringify(req.user)}`)
  if (!req.user.permissions) return next(new UserNotPermissions(`Sorry, user does not have the permissions object :(`))

  res.json({ user: req.user })
}

module.exports = {
  getMe,
  postMe
}
