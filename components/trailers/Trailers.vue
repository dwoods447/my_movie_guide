<template>
  <div>
          <div v-for="trailer in trailers" :key="trailer.id" style="margin: 10px;">
            <iframe   :src="youTubeURL+trailer.key" frameborder="0"></iframe>
          </div>
  </div>
</template>

<script>
import MovieService from '../../middleware/services/MovieService'
import TVShowService from '../../middleware/services/TVShowService'
  export default {
    props: {
      service: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        require: true,
      }
    },
    created(){
        this.getTrailers()
    },
    data(){
      return {
        youTubeURL: 'https://www.youtube.com/embed/',
        trailers: [],
      }
    },
     methods: {
        async getTrailers(){
          if(this.service === 'movie'){
             const resp = await MovieService.getTrailers(this.id);
             this.trailers = resp.data.results;
          } else {
             const resp = await TVShowService.getTrailers(this.id);
             this.trailers = resp.data.results;
          }

        }
     }
  }
</script>

<style lang="scss" scoped>

</style>
