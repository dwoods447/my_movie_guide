const fetch  = require('node-fetch');
const config = require('../config/config');

module.exports = {
  async getMovie(req, res){

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
    }
  },

  async getNowPlaying(req, res){
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/now_playing?api_key=${config.api_key}&language=en-US&page=1`, {
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
    }
  },

  async getPopularMovies(req, res){
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/movie/popular?api_key=${config.api_key}&language=en-US&page=1`, {
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
    }
  },

  async getMovieCredits(req, res){

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
    }
  },

  async searchMovie(req, res){
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
    }
  },

  async getTrailers(req, res){
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
    }
  }

}
