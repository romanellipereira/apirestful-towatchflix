const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController.js')

// Routes: getAll, post, getByID, put, patch, delete

router.get("/", controller.getAllMovies);
router.post("/", controller.createItem);
router.get("/:id", controller.getMovieByID);
router.put("/:id", controller.updateItem);
router.patch("/:id/watched/", controller.updateWatchedMovie);
router.delete("/:id", controller.deleteItem);

module.exports = router;