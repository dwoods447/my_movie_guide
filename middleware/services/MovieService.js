import axios from 'axios'

export default {
    getMovie(id){
     return axios.get(`/movies/movie/${id}`);
    },

    getNowPlaying(){
     return axios.get(`/movies/now_playing/current`);
   },

   getPopularMovies(){
    return axios.get(`/movies/popular/movies`);
   },
   getMovieCredits(id){
    return axios.get(`/movies/movie/${id}/credits`);
   },
   searchMovie(query){
    return axios.get(`/movies/movie/${query}`);
   },

   getTrailers(id){
    return axios.get(`/movies/movie/${id}/trailers`);
   }

}
