const express = require('express');
const router = express.Router();
const  MovieController  = require('../controllers/MovieController');


router.get("/now_playing", MovieController.getNowPlaying);
router.get("/movie/:movie_id", MovieController.getMovie);
router.get("/popular", MovieController.getPopularMovies);
router.get("/movie/:movie_id/credits/", MovieController.getMovieCredits)

module.exports = router;
