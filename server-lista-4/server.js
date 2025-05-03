// Servidor Web que utiliza o módulo Express

// importação da biblioteca Express
const express = require('express')

// usado para expor a pasta public
const path = require('path');

// criação de um app Express
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// importação das rotas
const rotasBicicleta = require('./routes/bicicleta');
const rotasBikeEletrica = require('./routes/bike-eletrica');

// rota para a página inicial 
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'src', 'pages', 'index.html'));
})

// gerenciamento das rotas do site
app.use('/bicicleta', rotasBicicleta);
app.use('/bikeEletrica', rotasBikeEletrica);

// rodar o servidor
app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}/`);
});