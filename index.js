const express = require('express');
const path = require('path');
const PORT = 4000;

const app = express();

app.listen(PORT, () => console.log('Server started on port 4000'));

app.put('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Radium Rocket', 'Semana 9', 'index.html')) // Modelo de formato, todavía no funcional
});

app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '', ''));
});

function handleLogin() {

};

function handleRegister() {

};