const express = require('express')
const config = require('./config')
const logger = require('./loaders/logger')

async function startServer () {
  const app = express()
  await require('./loaders')(app) // Start the loaders configuration

  app.listen(config.port, (err) => {
    if (err) {
      console.log('there is an error')
      process.exit(1)
      return
    }
    logger.info(`Server started on the port ${config.port}`)
  })
}

startServer()
