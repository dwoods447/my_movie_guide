<template>
<div>
  <div>
    <AppHeader/>
  </div>
   <div class="container">
     <div v-if="msg">{{ msg }}</div>
      <h2>Now Playing</h2>
      <MovieList :list="now_playing_movies" :numberToDisplay="3"/>
      <p><a href="#">See More...</a></p>
      <br/>
      <h2>Popular</h2>
      <MovieList :list="popular_movies" :numberToDisplay="3"/>
      <p><a href="#">See More...</a></p>
  </div>
</div>

</template>

<script>
import MovieService from '../middleware/services/MovieService'
import AppHeader from '../components/AppHeader'
import axios from 'axios'
import MovieList from '../components/movies/MovieList'
export default {
  components: {
    MovieList,
    AppHeader,
  },
  mounted(){

    this.getNowPlaying();
    this.getPoularMovies();
  },
 data(){
   return {
     msg: "",
     now_playing_movies: [],
     popular_movies: [],
   }
  },
  methods: {

    async getNowPlaying(){
       const res = await MovieService.getNowPlaying();
       // console.log('Now playing:');
        //console.log(res.data.results);
        this.now_playing_movies = res.data.results;
    },
     async getPoularMovies(){
       const res = await MovieService.getPopularMovies();
        //console.log('Popular:');
        //console.log(res.data.results);
        this.popular_movies = res.data.results;
    },
  }
}
</script>

<style>

</style>
