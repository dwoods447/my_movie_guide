<template>
<div>
  <div>
    <AppHeader/>
  </div>
   <div class="container">
     <div v-if="msg">{{ msg }}</div>
      <h2>Now Playing in Theaters</h2>
      <MovieList :list="now_playing_movies" :numberToDisplay="3"/>
      <p><a href="#">See More...</a></p>
      <br/>
      <h2>Popular Movies</h2>
      <MovieList :list="popular_movies" :numberToDisplay="3"/>
      <p><a href="#">See More...</a></p>

      <h2>Popular TVShows</h2>
      <TVShowList :list="popular_tvshows" :numberToDisplay="3"/>
      <p><a href="#">See More...</a></p>
  </div>
</div>

</template>

<script>
import MovieService from '../middleware/services/MovieService'
import TVShowService from '../middleware/services/TVShowService'
import AppHeader from '../components/AppHeader'
import axios from 'axios'
import MovieList from '../components/movies/MovieList'
import TVShowList from '../components/tvshows/TVShowList'
export default {
  components: {
    MovieList,
    AppHeader,
    TVShowList
  },
  mounted(){
    console.log('Index mounted');
    this.getNowPlaying();
    this.getPoularMovies();
    this.getPoularTVshows();
  },
 data(){
   return {
     msg: "",
     now_playing_movies: [],
     popular_movies: [],
     popular_tvshows: [],
   }
  },
  methods: {

    async getNowPlaying(){
      try {
          const res = await MovieService.getNowPlaying();
           this.now_playing_movies = res.data.results;
             console.log(`${res.data.results}`);
             // console.log('Now playing:');
             // console.log(res.data.results);
            // console.log(`NOW PLAYING ${JSON.stringify(res.data.results, null, 2)}`);

      } catch(err){
        console.log(`Error in the getNowPlaying function: ${err}`);
      }


    },
     async getPoularMovies(){
       try {
        const res = await MovieService.getPopularMovies();
        //console.log('Popular:');
        //console.log(res.data.results);
        this.popular_movies = res.data.results;
         console.log(`\r\n\r\n`);
         // console.log(`POPULAR CLIENT MOVIES ${JSON.stringify(res.data.results, null, 2)}`);
       } catch(err){
          console.log(`Error in the getPoularMovies function: ${err}`);
       }

    },

     async getPoularTVshows(){
       try {
           const res = await TVShowService.getPopularTVShows();

        //console.log('Popular:');
        //console.log(res.data.results);
        this.popular_tvshows = res.data.results;
         console.log(`\r\n\r\n`);
       // console.log(`POPULAR CLIENT TVS ${JSON.stringify(res.data.results, null, 2)}`);
       } catch(err){
          console.log(`Error in the getPoularTVshows function: ${err}`);
       }

    },
  }
}
</script>

<style>

</style>
