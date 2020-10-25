const express = require('express');
const router = express.Router();
const controller = require('../controller/tvShowsController.js');


router.get("/", controller.getAllTvShows);
router.get("/:id", controller.getTvShowByID);
router.post("/", controller.includeTvShow);
router.put("/:id", controller.updateTvShow);
router.patch("/:id/liked/", controller.markAsliked);
router.delete("/:id", controller.deleteTvShow);
// router.post("/:id/season/:seasonId/episode", controller.includeEpisode);
// router.post("/:id/season", controller.includeSeason);
// router.delete("/:id/season/:seasonId", controller.deleteSeason);
// router.delete("/:id/season/:seasonId/episode/:episodeId", controller.deleteEpisode);
// router.patch("/:id/season/:seasonId/episode/:episodeId/watched", controller.watchedEpisode);


module.exports = router;