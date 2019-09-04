const logger = require('../loaders/logger')

const getMe = (req, res) => {
  logger.info(`Use route getMe`)
  res.json({ user: 'yo' })
}

const postMe = (req, res) => {
  logger.info(`Use route postMe`)
  logger.info(`info user: ${JSON.stringify(req.user)}`)
  res.json({ user: 'yo post' })
}

module.exports = {
  getMe,
  postMe
}
