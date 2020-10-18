const express = require('express');
const app = express();

app.use(express.json());

const index = require('./routes/index.js');
const movies = require('./routes/moviesRoute.js');

app.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-with, Content-Type, Accept'
    );
    next();
});

// midlewares
app.use("/", index);
app.use("/movies", movies);

module.exports = app;