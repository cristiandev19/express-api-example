const express    = require('express'),
      app        = express(),
      cors       = require('cors'),
      bodyParser = require('body-parser'),
      { dbConnection } = require('./src/database/config');;

require('dotenv').config();

// Hacemos la conexion a mongodb
dbConnection();
// Aqui configuraciones
app
  .use(cors({ 'origin': '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));

// Importamos modulos
const r_example = require('./src/modules/example/r_example');
// Establecemos las rutas
app
.use('/example', r_example)


app.listen(process.env.PORT, () => {
console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});