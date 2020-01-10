const express = require('express');
const router = express.Router();
const  MovieController  = require('../controllers/MovieController');


router.get("/now_playing/current", MovieController.getNowPlaying);
router.get("/movie/:movie_id", MovieController.getMovie);
router.get("/popular/movies", MovieController.getPopularMovies);
router.get("/movie/:movie_id/credits/", MovieController.getMovieCredits);
router.get("/search/movie/:q", MovieController.searchMovie);
router.get("/movie/:id/trailers", MovieController.getTrailers);
module.exports = router;
