<template>
  <div class="container">
     <div v-if="msg">{{ msg }}</div>
    <div style="min-width: 100%; min-height: 100vh;">index page</div>

  </div>
</template>

<script>
import MovieService from '../middleware/services/MovieService'
import axios from 'axios'
export default {
  mounted(){
    this.getMovie();
  },
 data(){
   return {
     msg: "",
   }
  },
  methods: {
    async getMovie(){
      const res = await MovieService.getMovie(1);
      console.log(res.data);
      this.msg = res.data.messsage;
    }
  }
}
</script>

<style>

</style>
