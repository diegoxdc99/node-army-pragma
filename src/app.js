const express = require('express')
const config = require('./config')

async function startServer () {
  const app = express()
  await require('./loaders')(app)

  app.listen(config.port, (err) => {
    if (err) {
      console.log('Hay un error')
      process.exit(1)
      return
    }
    console.log(`Servidor iniciado en el puerto ${config.port}`)
  })
}

startServer()
