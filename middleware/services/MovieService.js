import api from '../api'

export default {
    getMovie(id){
     return api.get(`/movies/movie/${id}`);
    },

    getNowPlaying(){
    return api.get(`/movies/now_playing`);
   },

   getPopularMovies(){
    return api.get(`/movies/popular`);
   },
   getMovieCredits(id){
    return api.get(`/movies/movie/${id}/credits`);
   },
   searchMovie(query){
    return api.get(`/movies/movie/${query}`);
   },

   getTrailers(id){
    return api.get(`/movies/movie/${id}/trailers`);
   }

}
