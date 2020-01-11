import axios from 'axios'
let api;
if(process.env.NODE_ENV !== 'production'){
   console.log(`The port number ${process.env.PORT}`);
  api = axios.create({
    baseURL: 'http://localhost:3000/api'
  })
} else {
  console.log(`The port number ${process.env.PORT}`);
  api = axios.create({
    baseURL: 'https://nuxt-movie-guide-app.herokuapp.com/api'
  })
}


export default api;
