const express = require('express')
const config = require('./config')

async function startServer () {
  const app = express()
  await require('./loaders')(app) // Start the loaders configuration

  app.listen(config.port, (err) => {
    if (err) {
      console.log('there is an error')
      process.exit(1)
      return
    }
    console.log(`Server started on the port ${config.port}`)
  })
}

startServer()
