const axios = require('axios');

const formSubmit = (event) => {
    event.preventDefault();
    const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
                          .map(checkbox => checkbox.value);
    const newMovieData = {
        title: document.getElementById('titleInput').value.trim(),
        year: document.getElementById('yearInput').value.trim(),
        director: document.getElementById('directorInput').value.trim(),
        duration: document.getElementById('durationInput').value.trim(),
        genre: selectedGenres,
        rate: document.getElementById('rateInput').value.trim(),
        poster: document.getElementById('posterInput').value.trim(),
    };
    for (const propiedad in newMovieData) {
    if (
        propiedad === 'genre' && newMovieData[propiedad].length === 0 ||
        propiedad !== 'genre' && !newMovieData[propiedad]
  ) {
        alert(`Missing required field: ${propiedad}`);
        return;
  }
}
    axios.post("http://localhost:3000/movies", newMovieData)
    .then((data) => {
        console.log(data);
        alert('movie created succesfully')
    })
    .catch(error => console.log(error));
};




module.exports = {
    formSubmit
}


//sYTs7uSZ1YBNTJ5d