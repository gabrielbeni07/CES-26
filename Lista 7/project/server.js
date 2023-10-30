const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dados = [];

app.post('/dados', (req, res) => {
  dados.push(req.body);
  res.status(200).send();
});

app.get('/dados', (req, res) => {
  res.json(dados);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
