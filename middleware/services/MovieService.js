import axios from 'axios'
import API from './API';
export default {
    getMovie(id){
     return API.get(`/movies/movie/${id}`);
    },

    getNowPlaying(){
     return API.get(`/movies/now_playing/current`);
   },

   getPopularMovies(){
    return API.get(`/movies/popular/movies`);
   },
   getMovieCredits(id){
    return API.get(`/movies/movie/${id}/credits`);
   },
   searchMovie(query){
    return API.get(`/movies/movie/${query}`);
   },

   getTrailers(id){
    return API.get(`/movies/movie/${id}/trailers`);
   }

}
