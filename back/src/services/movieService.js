
const Movie = require("../models/Movie")

const getMovieService = async () => {
  const movies = await Movie.find();
  return movies;

}

    
    
const createMovieService = async(movieData) => {
    const newMovie = await Movie.create(movieData);
    return newMovie;
}

module.exports ={
    getMovieService,
    createMovieService
};