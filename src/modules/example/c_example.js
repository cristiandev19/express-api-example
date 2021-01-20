exports.exampleHola = (req, res) => {
  try {
    return res.status(200).send({
      msj: 'Hola como estas',
    });
  } catch {
    res.status(500).send({ msj: 'Algo salio mal'})
  }
}