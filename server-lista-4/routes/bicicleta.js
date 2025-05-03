const express = require('express');

const rotasBicicleta = express.Router();

const path = require('path');

rotasBicicleta.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'src', 'pages', 'bicicleta.html'));
});

module.exports = rotasBicicleta;