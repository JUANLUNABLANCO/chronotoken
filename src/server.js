const express = require('express');
const app = express();

const { PORT = 5000 } = process.env;

app.use(express.static(__dirname + '/public'));

const server = app.listen(PORT, () => {
	console.log('Servidor web iniciado');
});
