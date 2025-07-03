const movieValidationData = (req, res, next) => {
    const fields = ["title", "director", "year", "duration", "genre", "rate", "poster"];
    const missingFields=fields.filter( field => !req.body[field]);

    if(missingFields.length > 0){
        res.status(400).json({
            message: 'missing required fields to create the movie',
            data: missingFields.join(' - ')
            });
        }else{
            next();
        }        
}



module.exports = {
    movieValidationData,
};