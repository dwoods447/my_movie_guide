<template>
  <div>
   Movie ID: {{ $route.params.id }}
   <div><CastAndCrew :items="credits" /></div>
   <div><Trailers service="movie" :id="parseInt($route.params.id)"/></div>
  </div>
</template>

<script>
import MovieService from '../../../../middleware/services/MovieService'
import CastAndCrew from '../../../../components/credits/CastAndCrew'
import Trailers from '../../../../components/trailers/Trailers'
  export default {
     components: {
       CastAndCrew,
       Trailers
     },
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
          console.log(`cREDITS ${JSON.stringify(resp.data, null, 2)}`);
          this.credits = resp.data.cast;
        },

      }
  }
</script>

<style lang="scss" scoped>

</style>
