# node-army-pragma
Repositorio guía para el grupo de estudio de nodejs

### clase 2: estructura del proyecto
En esta clase se organiza la estructura del proyecto en varias capas
api: donde estarán todas las rutas y los middlewares de la api.
config: archivo de configuración que lee las variables de ambiente o toma valores por defecto en caso de que no existan.
controllers: manejadores de peticiones a los enrutadores.
loaders: Código para iniciar la aplicación, como por ejemplo el loader de express