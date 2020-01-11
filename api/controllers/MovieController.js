const fetch  = require('node-fetch');
const config = require('../config/config');

module.exports = {
  async getMovie(req, res, next){

    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/${req.params.movie_id}?api_key=${config.api_key}&language=en-US&page=1`, {
        headers
      });

      const data  = await resp.json();
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);
    }


    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  },

  async getNowPlaying(req, res, next){
    console.log(`Getting Now Playing movies...`);
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/now_playing?api_key=${config.api_key}&language=en-US&page=1`, {
        headers
      });

      const data  = await resp.json();
     //  console.log(`Now Playing ${JSON.stringify(data)}`);
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);

    }


    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  },

  async getPopularMovies(req, res, next){
    console.log(`Getting Popular movies...`);
    console.log(`Making request to ${config.api_url}/movie/popular?api_key=${config.api_key}&language=en-US&page=1`)
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/popular?api_key=${config.api_key}&language=en-US&page=1`, {
        headers
      });


      const data  = await resp.json();

      console.log(`Popular movies returned: ${data}`);
      // console.log(`Popular ${JSON.stringify(data)}`);
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);
    }


    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  },

  async getMovieCredits(req, res, next){

    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/${req.params.movie_id}/credits?api_key=${config.api_key}&language=en-US&page=1`, {
        headers
      });

      const data  = await resp.json();
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);
    }


    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  },

  async searchMovie(req, res, next){
    console.log(`Searching movie.....${req.params.q}`);
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/search/movie?api_key=${config.api_key}&language=en-US&query=${req.params.q}&include_adult=false`, {
        headers
      });
      const data  = await resp.json();
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);
    }


    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  },

  async getTrailers(req, res, next){
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/${req.params.id}/videos?api_key=${config.api_key}&language=en-US`, {
        headers
      });
      const data  = await resp.json();
      if(data.errors && data.errors.length > 0){
        //information not found
        res.status(404).json('Information Not Found');
    } else {
        // information found send response
        res.status(200).json(data);
    }

    } catch(err){
      console.log(err);
      res.status(500).json({message: 'Server error'});
      next(err);
    }
  }

}
