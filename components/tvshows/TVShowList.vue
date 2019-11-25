<template>
  <div>

    <div class="row">
        <div class="col-lg-4 col-sm-6 portfolio-item"  v-for="item in filteredList"  :key="item.id">
        <div class="card h-100" >
          <a href="#"><img class="card-img-top" :src="image_url+item.poster_path" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#" @click="viewTVshow(item.id)">{{item.title}}</a>
            </h4>
            <p class="card-text">{{item.overview}}</p>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import TVShowService from '../../middleware/services/TVShowService'
  export default {
    props: {
      list: {
        type: Array,
        required: true,
      },
      numberToDisplay: {
        type: Number,
        required: false,
      }

    },
    data(){
      return {
          image_url: "https://image.tmdb.org/t/p/original",
          tvshow: "",
      }
    },
    methods: {
      async viewTVshow(id){
        const res = await TVShowService.getTVShow(id);
          console.log(`View TV show ${JSON.stringify(res.data)}`);
          this.tvshow = res.data.results;
          this.$router.push({path: '/tvshows/tvshow/' + id , params: this.tvshow});

      }
    },
    computed: {
      filteredList(){
        if(this.numberToDisplay){
          return this.list.slice(0, this.numberToDisplay);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
