import api from './API'
export default {
    getMovie(id){
     return api.get(`/movie/${id}`);
    },

    getNowPlaying(){
     return api.get(`/now_playing/current`);
   },

   getPopularMovies(){
    return api.get(`/popular/movies`);
   },
   getMovieCredits(id){
    return api.get(`/movie/${id}/credits`);
   },
   searchMovie(query){
    return api.get(`/movie/${query}`);
   },

   getTrailers(id){
    return api.get(`/movie/${id}/trailers`);
   }

}
