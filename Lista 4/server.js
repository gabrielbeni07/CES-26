const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 1) Servindo arquivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));

// 2) Rota para upload de arquivo
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Arquivo enviado com sucesso!');
});

// 3) Processando dados de um formulário via GET
app.get('/formulario', (req, res) => {
    const nome = req.query.nome;
    const email = req.query.email;
    res.send(`Nome: ${nome}, Email: ${email}`);
});

// 4) Rota para servir dados JSON para a aplicação AJAX

app.get('/dados', (req, res) => {
    const data = {
        nome: "João",
        idade: 25
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
