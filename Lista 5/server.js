const express = require('express');
const app = express();
const PORT = 3001;

const cidades = [
  {
    nome: 'São Paulo',
    foto: 'http://localhost:3001/images/SP.jpg',
    descricao: 'São Paulo é uma cidade localizada no Sudeste do país..'
  },

  {
    nome: 'Rio de Janeiro',
    foto: 'http://localhost:3001/images/RJ.jpg',
    descricao: 'O Rio de Janeiro é uma cidade localizada no Sudeste do país..'
  },

  {
    nome: 'Fortaleza',
    foto: 'http://localhost:3001/images/Fortaleza.jpg',
    descricao: 'Fortaleza é uma cidade localizada no Nordeste do país..'
  },
  // ... adicione outras cidades aqui
];

app.get('/', (req, res) => {
    res.send('Servidor Express rodando!');
});

app.use(express.static('public'));

app.get('/cidades', (req, res) => {
  res.json(cidades.map(cidade => ({ nome: cidade.nome })));
});

app.get('/cidades/:nome', (req, res) => {
  const cidade = cidades.find(c => c.nome === req.params.nome);
  if (cidade) {
    res.json(cidade);
  } else {
    res.status(404).send('Cidade não encontrada');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
