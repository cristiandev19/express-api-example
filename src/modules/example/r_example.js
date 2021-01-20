const express = require('express');
const router = express.Router();

const c_example = require('./c_example');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/hola', c_example.exampleHola);

module.exports = router;