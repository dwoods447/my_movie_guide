<template>
  <div>
    <v-select :options="searchResults" placeholder="Search for a movie or tvshow" style="width: 300px; background-color: #fff; border-radius: 6px;"></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import MovieService from '../../middleware/services/MovieService'
import TVShowService from '../../middleware/services/TVShowService'
  export default {
      components: {
        'v-select':vSelect
      },
      data(){
        return {
           results: [],
        }
      },
      methods: {
          async search(data){
              const respMovie  = await MovieService.searchMovie();
              const respTv  = await TVShowService.searchTVShow();
              console.log(`Searching for ${data} .....`);
              if(respMovie.data.length > 0){
                 this.results = [...respMovie.data];
              }
              if(respTv.data.length > 0){
                this.results = [...respTv.data];
              }

          }
      },
      computed: {
          searchResults(){
              return this.results;
          }
      }
  }
</script>

<style  scoped>
  /* @import url('https://unpkg.com/vue-select@3.0.0/dist/vue-select.css'); */
</style>
