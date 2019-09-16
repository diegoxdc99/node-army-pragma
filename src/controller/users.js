const logger = require('../loaders/logger')
const userService = require('../services/user')
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

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser({
      name: 'asdasdas  asdasdasd',
      email: 'ASDSADAS@asdasd.coms'
    })
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getMe,
  postMe,
  createUser
}
