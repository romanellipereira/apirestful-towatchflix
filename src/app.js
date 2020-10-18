const express = require('express');
const app = express();

app.use(express.json());

express.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-with, Content-Type, Accept'
    );
    next();
});

module.exports = app;