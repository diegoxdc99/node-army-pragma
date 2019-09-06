class UserNotPermissions extends Error {
  constructor (args) {
    super(args)
    this.name = 'UserNotPermissions'
    Error.captureStackTrace(this, UserNotPermissions)
  }
}

module.exports = UserNotPermissions
