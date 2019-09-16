const mongoose = require('mongoose')
const chalk = require('chalk')
const logger = require('./logger')

const connected = chalk.bold.cyan
const error = chalk.bold.yellow
const disconnected = chalk.bold.red
const termination = chalk.bold.magenta

const { url: dbURL } = require('../config').db
const optionsBD = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

async function connect () {
  registerEvents()
  await mongoose.connect(dbURL, optionsBD)
}

function registerEvents () {
  mongoose.connection.on('connected', function () {
    logger.info(connected('Mongoose default connection is open'))
  })
  mongoose.connection.on('error', function (err) {
    logger.error(error('Mongoose default connection has occured ' + err + ' error'))
  })
  mongoose.connection.on('disconnected', function () {
    logger.info(disconnected('Mongoose default connection is disconnected'))
  })
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      logger.info(termination('Mongoose default connection is disconnected due to application termination'))
      process.exit(0)
    })
  })
}

module.exports = connect
