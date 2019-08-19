const logger = require('../loaders/logger')

const getMe = (req, res) => {
  logger.info(`el es administrador? ${req.user.isAuth}`)
  res.json({ user: 'yo' })
}

const postMe = (req, res) => {
  logger.info(`el es administrador? ${req.user.isAuth}`)
  res.json({ user: 'yo post' })
}

module.exports = {
  getMe,
  postMe
}
