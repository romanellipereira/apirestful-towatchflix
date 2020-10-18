const movies = require("../model/movies.json");
const fs = require("fs");

const getAllMovies = (req, res) => {
    res.status(200).send(movies);
};

const createItem = (req, res) => {
    const { id, name , genre , synopsis , whatched } = req.body;
    movies.push({ id, name , genre , synopsis , whatched });

    fs.writeFile("./src/model/movies.json" , JSON.stringify(movies) , 'utf8' , function(err) {
        if (err) {
            res.status(424).send({ message: err });
        } else {
            console.log("Update successful!")
            const movieFound = movies.find(movie => movie.id == id);
            res.status(200).send(movieFound);
        };
    });
};

const getMovieByID = (req, res) => {
    const movieID = req.params.id;
    
    try {
        const movieFound = movies.find(movie => movie.id == movieID);

    if (movieFound) {
        res.status(200).send(movieFound);
    } else {
        res.status(404).send({ message: "Movie not found" });
    };

    } catch (error) {
        res.status(500).send({ message: "API error" });
    };
};

const updateItem = (req, res) => {
    const movieID = req.params.id;
    const movieToUpdate = req.body;

    const movieFound = movies.find(movie => movie.id == movieID);
    const movieIndex = movies.indexOf(movieFound);

    if(movieIndex >= 0) {
        movies.splice(movieIndex, 1, movieToUpdate);

        fs.writeFile("./src/model/movies.json" , JSON.stringify(movies) , 'utf8' , function(err) {
            if (err) {
                res.status(424).send({ message: err });
            } else {
                console.log("Update successful!")
                const movieUpdated = movies.find(movie => movie.id == movieID);
                res.status(200).send(movieUpdated);
            };
        });

    } else {
        res.status(404).send({ message: "Movie not found" });
    };
};

const updateWatchedMovie = (req, res) => {
    try {
        const movieID = req.params.id;
        const newStatus = req.body.watched;

        const movieToUpdate = movies.find(movie => movie.id == movieID);
        const movieIndex = movies.indexOf(movieToUpdate);

        if (movieIndex >= 0) {
            movieToUpdate.watched = newStatus;
            movies.splice(movieIndex, 1, movieToUpdate);
            
            fs.writeFile("./src/model/movies.json" , JSON.stringify(movies) , 'utf8' , function(err) {
                if (err) {
                    res.status(424).send({ message: err });
                } else {
                    const movieUpdated = movies.find(movie => movie.id == movieID);
                    res.status(200).send(movieUpdated);
                };
            });

        } else {
            res.status(404).send({ message: "Movie not found" });
        };
    } catch (err) {
        res.status(500).send({ message: "API error" });
    };
};

const deleteItem = (req, res) => {
    try {
        const movieID = req.params.id;
        const movieFound = movies.find(movie => movie.id == movieID);
        const movieIndex = movies.indexOf(movieFound);

        if (movieIndex >= 0) {
            movies.splice(movieIndex, 1);

            fs.writeFile("./src/model/movies.json" , JSON.stringify(movies) , 'utf8' , function(err) {
                if (err) {
                    res.status(424).send({ message: err });
                } else {
                    console.log("Update successful!");
                    res.sendStatus(204);
               };
            });

        } else {
            res.status(404).send({ message: "Movie not found" });
        };
    } catch (error) {
        res.status(500).send({ message: "API error" });
    };
};

module.exports = {
    getAllMovies,
    createItem,
    getMovieByID,
    updateItem,
    updateWatchedMovie,
    deleteItem
}