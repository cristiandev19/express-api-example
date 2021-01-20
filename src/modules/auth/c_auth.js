const auth_utils = require('./auth_utils');

exports.loginEmail = (req, res) => {
  try {
    console.log('req.body', req.body);
    const { email, password } = req.body;
    const data = { email, isLoged: true }
    const result = auth_utils.signToken(data);
    console.log("🚀 ~ file: c_auth.js ~ line 11 ~ result", result)
    
    res.status(200).send({
      msj: 'Ingreso existoso',
      token: result
    });
  } catch (error) {
    res.status(500).send({
      msj: 'Hubo un problema',
      error
    });
  }
}


exports.verifyLogin = (req, res) => {
  try {
    const result = auth_utils.verifyToken(req.query.token);
    if(result.error) {
      throw new Error(result.msj);
    }
    res.status(200).send({  
      msj: result.msj
    });
  } catch (error) {
    console.log("🚀 ~ file: c_auth.js ~ line 35 ~ error", error)
    res.status(500).send({
      msj: error.message || 'Hubo un problema',
      error
    });
  }
}