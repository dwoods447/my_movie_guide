<template>
  <div>
    <v-select v-model="searchTerm" :options="searchResults" placeholder="Search for a movie or tvshow" style="width: 300px; background-color: #fff; border-radius: 6px;"/>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import MovieService from '../../middleware/services/MovieService'
import TVShowService from '../../middleware/services/TVShowService'
import _ from 'lodash'
  export default {
      components: {
        'v-select':vSelect
      },
      data(){
        return {
           results: [],
           searchTerm: "",
        }
      },
      methods: {
          // async search(data){
          //     const respMovie  = await MovieService.searchMovie();
          //     const respTv  = await TVShowService.searchTVShow();
          //     console.log(`Searching for ${data} .....`);
          //     if(respMovie.data.length > 0){
          //        this.results = [...respMovie.data];
          //     }
          //     if(respTv.data.length > 0){
          //       this.results = [...respTv.data];
          //     }

          // }
      },
      computed: {
          searchResults(){
              return this.results;
          }
      },

      watch:{
        searchTerm: _.debounce(async function(value){
          console.log(`Value searching for ... ${value}`);
            // if(value.length > 2){
            //     const respMovie = await MovieService.searchMovie(value);
            //     const respTv  = await TVShowService.searchTVShow(value);
            //     if(respMovie.data.length > 0 || respTv.data.length > 0){
            //       this.results = [...respMovie.data, ...respTv.data];
            //       console.log(`TV Results returned: ${JSON.stringify(respMovie.data, null, 2)}`);
            //       console.log(`Movie Results returned: ${JSON.stringify(respTv.data, null, 2)}`);
            //       console.log(`Search Results returned: ${JSON.stringify(this.results, null, 2)}`);
            //     }
            // }
        })
      }
  }
</script>

<style  scoped>
  /* @import url('https://unpkg.com/vue-select@3.0.0/dist/vue-select.css'); */
</style>
