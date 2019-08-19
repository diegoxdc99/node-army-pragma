const express = require('express') // solicitar express

const app = express() // crea una instancia de express
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => { // crea una ruta a nivel de aplicacion
  res.send('hola mundo')
})

app.listen(PORT, () => { // crea un servidor
  console.log(`Servidor iniciado en el puerto ${PORT}`)
})
