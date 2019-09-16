const { User } = require('../models')

const createUser = async (userInput) => {
  const userRecord = new User(userInput)
  const userSaved = await userRecord.save()
  const user = userSaved.toObject()
  Reflect.deleteProperty(user, 'createdAt')
  Reflect.deleteProperty(user, 'updatedAt')
  Reflect.deleteProperty(user, '__v')
  Reflect.deleteProperty(user, '_id')
  return user
}

module.exports = {
  createUser
}
