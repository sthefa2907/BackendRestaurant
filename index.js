let mongoose = require('mongoose')
const app = require('./app')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')
  .then(() => {
    console.log('Base de datos conectada exitosamente')

    app.listen(app.get('port'), () => {
      console.log(`Servidor ejecutándose en http://localhost:${app.get('port')}`)
    })
  })
  .catch(err => console.error(err))