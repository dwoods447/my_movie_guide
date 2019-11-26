const express = require('express');
const router = express.Router();
const  TvShowController  = require('../controllers//TvShowController');


router.get("/tvshow/:tvshow_id", TvShowController.getTVShow);
router.get("/popular", TvShowController.getPopularTVShows);
router.get("/tvshow/:tvshow_id/credits/", TvShowController.getTVShowCredits)
router.get("/search/tvshow/:q", TvShowController.searchTVShow);
router.get("/tvshow/:id/trailers", TvShowController.getTrailers);
module.exports = router;
