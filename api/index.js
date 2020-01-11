const express = require('express');
const router = express.Router();


const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})



const  MovieController  = require('./controllers/MovieController');
const  TvShowController  = require('./controllers//TvShowController');

router.get("/now_playing/current", MovieController.getNowPlaying);
router.get("/movie/:movie_id", MovieController.getMovie);
router.get("/popular/movies", MovieController.getPopularMovies);
router.get("/movie/:movie_id/credits/", MovieController.getMovieCredits);
router.get("/search/movie/:q", MovieController.searchMovie);
router.get("/movie/:id/trailers", MovieController.getTrailers);




router.get("/tvshow/:tvshow_id", TvShowController.getTVShow);
router.get("/popular", TvShowController.getPopularTVShows);
router.get("/tvshow/:tvshow_id/credits/", TvShowController.getTVShowCredits)
router.get("/search/tvshow/:q", TvShowController.searchTVShow);
router.get("/tvshow/:id/trailers", TvShowController.getTrailers);


module.exports = {
  path: '/api',
  handler: router
}
