import api from '../api'

export default {
    getMovie(id){
        return api.get(`/movies/movie/${id}`);
    },

}
