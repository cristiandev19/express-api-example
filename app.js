const express    = require('express'),
      app        = express(),
      cors       = require('cors'),
      bodyParser = require('body-parser'),
      { dbConnection } = require('./src/database/config');

require('dotenv').config();

//passport stuff
const passport = require('passport');
const jwtStrategry  = require('./src/strategies/jwt');
passport.use(jwtStrategry);

// Hacemos la conexion a mongodb
dbConnection();
// Aqui configuraciones
app
  .use(cors({ 'origin': '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));

// Importamos modulos
const r_example = require('./src/modules/example/r_example');
const r_auth = require('./src/modules/auth/r_auth');
// Establecemos las rutas
app
  .use('/example', r_example)
  .use('/auth', r_auth);

// Ejemplo de ruta protegida
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send('YAY! this is a protected Route')
})


app.listen(process.env.PORT, () => {
console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});