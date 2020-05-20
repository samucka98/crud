const express = require('express');
const router = express.Router();

router.get('/clientes', (req, res) => {
  res.send('Tudo certo por aqui!');
});

module.exports = router;