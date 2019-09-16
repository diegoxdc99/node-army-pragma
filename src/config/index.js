const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'develop'

const envFound = dotenv.config() // load the .env file
if (!envFound) {
  console.log('File .env does not exist')
}

module.exports = {
  port: process.env.PORT || 5000,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
  auth: {
    secret: process.env.SECRET
  },
  db: {
    url: process.env.DB_URL
  }
}
