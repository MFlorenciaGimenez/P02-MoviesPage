const { Router } = require('express');
const {getMoviesController, createMovieController }  = require('../controllers/moviesController');
const { movieValidationData } = require('../middlewares');

const moviesRouter = Router();

moviesRouter.get('/', getMoviesController);
moviesRouter.post('/', movieValidationData, createMovieController)



module.exports = {
    moviesRouter
}
