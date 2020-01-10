
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/vueperslides/dist/vueperslides.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css'},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/modern-business.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.port ? `https://nuxt-movie-guide-app.herokuapp.com` : `http://localhost`,
    API_PREFIX: 'api',
    API_PORT: process.env.port ? process.env.port : 3000
  },
  /*
  ** Build configuration
  */
 scripts: [
  '~/assets/vendor/jquery/jquery.min.js',
  '~/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
 ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
