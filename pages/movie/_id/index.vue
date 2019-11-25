<template>
  <div>
   Movie ID: {{ $route.params.id }}
   <div>{{ credits  }}</div>
  </div>
</template>

<script>
import MovieService from '../../../middleware/services/MovieService'
  export default {
      mounted(){
        console.log(`Movie Params ${JSON.stringify(this.$route.params)}`);
        this.getMovieCredits(this.$route.params.id);
      },
      data(){
        return {
          movie: null,
          credits: [],
        }
      },
      methods: {
        async getMovieCredits(id){
          const resp = await MovieService.getMovieCredits(id);
          console.log(`cREDITS ${JSON.stringify(resp.data)}`);
          this.credits = resp.data;
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>
