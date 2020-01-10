import axios from 'axios'
import nuxtConfig from '../nuxt.config'
const axiosInstance = axios.create({
  baseURL: "https://nuxt-movie-guide-app.herokuapp.com" + ':' + nuxtConfig.server.port,

});

export default axiosInstance
