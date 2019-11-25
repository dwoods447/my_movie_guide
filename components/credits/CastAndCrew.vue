<template>
  <div>

<div style="margin: 50px; padding: 40px;">
   <h2>Cast & Crew</h2>
 <vueper-slides class="no-shadow"  :visible-slides="4" slide-multiple :slide-ratio="1/4" :dragging-distance="70"   slideContentInside="bottom" autoplay>
  <vueper-slide v-for="(slide, i) in slideItems" :key="i" :image="slide.profile_path | imageUrl"  :content="slide.name" style="font-weight: 900; color: #fff; text-shadow: 2px 2px #000;"></vueper-slide>
</vueper-slides>
</div>
    <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(item, i) in slideItems" :class="['carousel-item', {'active': i == 0}]"  :key="item.cast_id">
        <img class="d-block w-10" :src="image_url+item.profile_path" :alt="item.name">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div> -->



  </div>
</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  export default {
    components: { 'vueper-slides' :VueperSlides, VueperSlide },
    props: {
      items: {
        type: Array,
        required: true,
      }
    },
    data(){
      return {
         image_url: "https://image.tmdb.org/t/p/original",
      }
    },
    computed: {
      slideItems(){
          console.log(JSON.stringify(this.items, null, 2))
          return this.items;
      },

    },
    filters: {
      imageUrl(path){
        if(path){
          console.log(`Image Path: ${path}`);
          return 'https://image.tmdb.org/t/p/original' + path;
        } else {
          return 'http://placehold.it/300x300'
        }
      }
    }
  }
</script>

<style scoped>
.vueperslide__content{
  color: #fff;
  font-weight: 900;
}
</style>
