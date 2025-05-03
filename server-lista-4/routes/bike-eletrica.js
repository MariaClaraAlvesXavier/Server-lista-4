const express = require('express');

const rotasBikeEletrica = express.Router();

const path = require('path');

rotasBikeEletrica.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'src', 'pages', 'bikeEletrica.html'));
});

module.exports = rotasBikeEletrica;