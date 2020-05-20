const express = require('express');
const bodyParser = require('body-parser');
const clientes = require('../model/data/clientes');
const router = express.Router();

router.get('/clientes', (req, res) => {
  res.json(JSON.stringify(clientes.getAllClients()));
});

router.post('/novo', bodyParser.json(), (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  clientes.newClient(name, description);
  res.send({status: 200, msg: 'Cliente cadastrado com sucesso!'});
});

module.exports = router;