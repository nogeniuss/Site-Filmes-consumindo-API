const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//sem isso, a rota abrira teu arquivo sem estilo
app.use(express.static('public'));

// Define a rota raiz para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//faz o servidor rodar
app.listen(port, () => {
    console.log(`http://localhost:${port}`); // Using backticks for string interpolation
});