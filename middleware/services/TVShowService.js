import axios from 'axios'
import API from './API';
export default {
  getTVShow(id){
    return API.get(`/tvshows/tvshow/${id}`);
  },
  getPopularTVShows(){
    return API.get(`/tvshows/popular`);
   },
   getTVShowCredits(id){
    return API.get(`/tvshows/tvshow/${id}/credits`);
   },
   getTrailers(id){
    return API.get(`/tvshows/tvshow/${id}/trailers`);
   }
}
