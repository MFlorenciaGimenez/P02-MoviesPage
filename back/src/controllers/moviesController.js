const { getMovieService, createMovieService } = require('../services/movieService');

const getMoviesController = async (req, res) => {
  try {
    const movies = await getMovieService();  
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovieController = async (req, res) => {
  try {
    const movieCreated = await createMovieService(req.body);
    res.status(201).json({
      message:"movie created succesfully",
      data:movieCreated
    });
  }catch (error) {
    res.status(400).json({message : error.message})
  }
};
module.exports = {
  getMoviesController,
  createMovieController
};
