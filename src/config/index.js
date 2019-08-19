const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'develop'

const envFound = dotenv.config()
if (!envFound) {
  console.log('No existe el archiv .env')
}

module.exports = {
  port: process.env.PORT || 5000,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  }
}
