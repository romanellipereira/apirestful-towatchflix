const tvShows = require("../model/tvShows.json");
const fs = require("fs");

const getAllTvShows = (req, res) => {
    res.status(200).send(tvShows);
};

const getTvShowByID = (req, res) => {
    const tvShowID = req.params.id;
    
    try {
        const tvShowFound = tvShows.find(tvShow => tvShow.id == tvShowID);

    if (tvShowFound) {
        res.status(200).send(tvShowFound);
    } else {
        res.status(404).send({ message: "TV Show not found" });
    };

    } catch (error) {
        res.status(500).send({ message: "API error" });
    };
};

const includeTvShow = (req, res) => {
    const id = tvShows[tvShows.length - 1].id + 1;
    const { name , genre , synopsis , liked , seasons } = req.body;
    tvShows.push({ id, name , genre , synopsis , liked , seasons });

    fs.writeFile("./src/model/tvShows.json" , JSON.stringify(tvShows) , 'utf8' , function(err) {
        if (err) {
            res.status(424).send({ message: err });
        } else {
            console.log("Update successful!")
            const tvShowFound = tvShows.find(tvShow => tvShow.id == id);
            res.status(200).send(tvShowFound);
        };
    });
};

const updateTvShow = (req, res) => {
    const tvShowID = req.params.id;
    const tvShowToUpdate = req.body;

    const tvShowFound = tvShows.find(tvShow => tvShow.id == tvShowID);
    const tvShowIndex = tvShows.indexOf(tvShowFound);

    if(tvShowIndex >= 0) {
        tvShows.splice(tvShowIndex, 1, tvShowToUpdate);

        fs.writeFile("./src/model/tvShows.json" , JSON.stringify(tvShows) , 'utf8' , function(err) {
            if (err) {
                res.status(424).send({ message: err });
            } else {
                console.log("Update successful!")
                const tvShowUpdated = tvShows.find(tvShow => tvShow.id == tvShowID);
                res.status(200).send(tvShowUpdated);
            };
        });

    } else {
        res.status(404).send({ message: "TV Show not found" });
    };
};

const markAsliked = (req, res) => {
    try {
        const tvShowID = req.params.id;
        const newStatus = req.body.liked;

        const tvShowToUpdate = tvShows.find(tvShow => tvShow.id == tvShowID);
        const tvShowIndex = tvShows.indexOf(tvShowToUpdate);

        if (tvShowIndex >= 0) {
            tvShowToUpdate.liked = newStatus;
            tvShows.splice(tvShowIndex, 1, tvShowToUpdate);
            
            fs.writeFile("./src/model/tvShows.json" , JSON.stringify(tvShows) , 'utf8' , function(err) {
                if (err) {
                    res.status(424).send({ message: err });
                } else {
                    const tvShowUpdated = tvShows.find(tvShow => tvShow.id == tvShowID);
                    res.status(200).send(tvShowUpdated);
                };
            });

        } else {
            res.status(404).send({ message: "TV Show not found" });
        };
    } catch (err) {
        res.status(500).send({ message: "API error" });
    };
};

module.exports = {
    getAllTvShows,
    getTvShowByID,
    includeTvShow,
    updateTvShow,
    markAsliked
}