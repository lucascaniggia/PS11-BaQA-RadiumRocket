const express = require('express');
const path = require('path');
const PORT = 4000;
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

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