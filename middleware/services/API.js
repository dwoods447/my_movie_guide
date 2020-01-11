import axios from 'axios'
import development from '../../nuxt.config'

console.log(`development value ${JSON.stringify(development.envoirment)}`)
let api;
if(development.envoirment){
  api = axios.create({
    baseURL: 'http://localhost:3001'
  })
} else {
  api = axios.create({
    baseURL: 'https://nuxt-movie-guide-app.herokuapp.com'
  })
}


export default api;
