import axios from 'axios'

export default {
  getTVShow(id){
    return axios.get(`/tvshows/tvshow/${id}`);
  },
  getPopularTVShows(){
    return axios.get(`/tvshows/popular`);
   },
   getTVShowCredits(id){
    return axios.get(`/tvshows/tvshow/${id}/credits`);
   },
   getTrailers(id){
    return axios.get(`/tvshows/tvshow/${id}/trailers`);
   }
}
