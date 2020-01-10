import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://nuxt-movie-guide-app.herokuapp.com",

});

export default axiosInstance
