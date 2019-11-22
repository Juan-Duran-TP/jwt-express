const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_KEY;
const passport = require('./passport')
const app = express();

app.get('/token', (request,response) => {
    const token = jwt.sign({}, secret, { expiresIn: '1m'});
    return response.send(token);
});

app.get('/open',(request, response) => {
    response.json('Open');
});

app.get('/auth', passport.authenticate('jwt', {session: false}), (request, response) => {
    response.json('Auth');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});