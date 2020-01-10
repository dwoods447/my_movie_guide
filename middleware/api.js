import axios from 'axios'
const axiosInstance = axios.create({
   // baseURL: "https://nuxt-movie-guide-app.herokuapp.com" + ':' + nuxtConfig.server.port,

});

export default axiosInstance
