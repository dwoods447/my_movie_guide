<template>
  <div>
        <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">Welcome to Ultimate TV/Movie Guide </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/movies" class="nav-link">Movies</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tvshows" class="nav-link">TVShows</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="#" class="nav-link">Discover</nuxt-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              <a class="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
            </div>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
              <a class="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
              <a class="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Pages
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item" href="full-width.html">Full Width Page</a>
              <a class="dropdown-item" href="sidebar.html">Sidebar Page</a>
              <a class="dropdown-item" href="faq.html">FAQ</a>
              <a class="dropdown-item" href="404.html">404</a>
              <a class="dropdown-item" href="pricing.html">Pricing Table</a>
            </div>
          </li> -->
        </ul>
      </div>
      <div >
      </div>
      <!-- <v-select v-model="searchTerm":options="searchResults"  style="width: 300px; background-color: #fff; border-radius: 6px;"/> -->
       <!-- <multiselect v-on:input="debounceInput" :options="options"></multiselect> -->

      <div class="dropdown">
            <div id="myDropdown" class="dropdown-content">
              <input v-model="value" type="search" class="form-control ds-input" id="search-input" placeholder="Search..." aria-label="Search for..." autocomplete="off" data-siteurl="https://getbootstrap.com" data-docs-version="4.1" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top; width: 390px;">
              <span style="display: inline; background-color: #fff; display: none;" >
                <ul style="list-style-type: none; margin: 0; padding: 0;">
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                  <li><a href="#"><img src="https://placehold.it/75x75" style="margin: 2px;"><span style="margin: 2px;">suggection !</span></a></li>
                </ul>
              </span>
          </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
import SearchBar from '../components/search/SearchBar'
import vSelect from 'vue-select'
import MovieService from '../middleware/services/MovieService'
import TVShowService from '../middleware/services/TVShowService'
import Multiselect from 'vue-multiselect'
import _ from 'lodash'
  export default {
    components: {
      SearchBar,
      'v-select':vSelect,
      'multiselect': Multiselect
    },
    data(){
      return {
          results: [],
          searchTerm: "",
          value: null,
          options: ['list', 'of', 'options']
      }

    },
    methods: {
        debounceInput: _.debounce(async function (value) {
            console.log(`debounceInput searching for ... ${value}`);
        }, 1000)
    },
     computed: {
          searchResults(){
              return this.results;
          }
    },
    watch:{
        value: _.debounce(async function(value){
           console.log(`Value searching for ... ${value}`);
            if(value.length > 4){
              console.log(`Requesting `)
                // const respMovie = await MovieService.searchMovie(value);
                // const respTv  = await TVShowService.searchTVShow(value);
                // if(respMovie.data.length > 0 || respTv.data.length > 0){
                //   this.results = [...respMovie.data, ...respTv.data];
                //   console.log(`TV Results returned: ${JSON.stringify(respMovie.data, null, 2)}`);
                //   console.log(`Movie Results returned: ${JSON.stringify(respTv.data, null, 2)}`);
                //   console.log(`Search Results returned: ${JSON.stringify(this.results, null, 2)}`);
                // }
            }
        }, 1000)

      }


  }
</script>
