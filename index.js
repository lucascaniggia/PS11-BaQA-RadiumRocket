const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile('login.html')
});

app.get('/register', (req, res) => {
    res.sendFile('register.html')
});

app.listen(PORT, () => console.log('Server started on port 4000'));

app.put('/login', handleLogin)

app.post('/register', handleRegister)

function handleLogin(req, res) {
    console.log(req.body)

    const userLogin = {
        email: req.body.mailValue,
        password: req.body.passValue,
    };
    if (userLogin.email && userLogin.password1) {
        console.log("Ok");
        return res.json({ result: 'User data found successfully', userLogin });
    } else {
        throw new Error('User data not found');
    }
};

function handleRegister(req, res) {

    const userRegist = {
        name: req.body.nameRegValue,
        email: req.body.mailRegValue,
        password: req.body.passRegValue,
    };
    console.log(userRegist);
    res.json({ Result: 'Data sent' });

};