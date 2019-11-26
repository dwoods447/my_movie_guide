import api from '../api'

export default {
  getTVShow(id){
    return api.get(`/tvshows/tvshow/${id}`);
  },
  getPopularTVShows(){
    return api.get(`/tvshows/popular`);
   },
   getTVShowCredits(id){
    return api.get(`/tvshows/tvshow/${id}/credits`);
   },
   getTrailers(id){
    return api.get(`/tvshows/tvshow/${id}/trailers`);
   }
}
