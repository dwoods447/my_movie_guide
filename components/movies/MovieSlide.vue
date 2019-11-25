<template>
  <div>
        <div  v-for="(listItem, i) in listItems" :key="listItem.id" :class="['carousel-item', {active: i == 0}]" :style="`background-image: url(${image_url}${listItem.backdrop_path})`" >
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ listItem.title }}</h3>
            <p>{{ listItem.overview }}</p>
          </div>
        </div>
  </div>
</template>

<script>

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
    mounted(){
      console.log(`Slides ${JSON.stringify(this.listItems)}`)
    },
    data(){
      return {
        image_url: "https://image.tmdb.org/t/p/original",
      }
    },

    computed: {
      listItems(){
        console.log(`cOMPUTED sLIDES ${JSON.stringify(this.list)}`);
        return this.list.slice(0 , this.numberToDisplay);
      }
    }

  }
</script>

