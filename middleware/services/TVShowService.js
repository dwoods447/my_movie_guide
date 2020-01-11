import api from './API'

export default {
  getTVShow(id){
    return api.get(`/tvshow/${id}`);
  },
  getPopularTVShows(){
    return api.get(`/popular`);
   },
   getTVShowCredits(id){
    return api.get(`/tvshow/${id}/credits`);
   },
   getTrailers(id){
    return api.get(`/tvshow/${id}/trailers`);
   }
}
