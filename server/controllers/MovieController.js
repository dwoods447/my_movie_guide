
module.exports = {
  async getMovie(req, res){

      try {
        res.json({messsage: `Sending movie.....${req.params.id}`})
      } catch(err){
          res.status(500).json({message: 'An error occured: ' + err});
      }
  }
}
