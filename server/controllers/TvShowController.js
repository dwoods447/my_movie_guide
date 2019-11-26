const fetch  = require('node-fetch');
const config = require('../config/config');

module.exports = {
  async getTVShow(req, res){

    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/tv/${req.params.tvshow_id}?api_key=${config.api_key}&language=en-US`, {
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

  async getPopularTVShows(req, res){
    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/tv/popular?api_key=${config.api_key}&language=en-US&page=1`, {
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


  async getTVShowCredits(req, res){

    let headers = {}
    try {
      const resp = await fetch(`${config.api_url}/tv/${req.params.tvshow_id}/credits?api_key=${config.api_key}&language=en-US`, {
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


  async searchTVShow(req, res){
    let headers = {}
    try {

      const resp = await fetch(`${config.api_url}/search/tv?api_key=${config.api_key}&language=en-US&query=${req.params.q}&include_adult=false`, {
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
      const resp = await fetch(`${config.api_url}/tv/${req.params.id}/videos?api_key=${config.api_key}&language=en-US`, {
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
