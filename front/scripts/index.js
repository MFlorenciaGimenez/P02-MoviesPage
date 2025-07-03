const { renderCards } = require('./renderCards');
const axios = require('axios');
const { formSubmit } = require('./formulario');


const contenedor = document.getElementById("contenedorPeliculas");

if (contenedor) {
  axios.get('http://localhost:3000/movies')
    .then((respuesta) => {
      const peliculas = respuesta.data;
      renderCards(peliculas);
    })
    .catch((error) => {
      console.error('Error al obtener las películas:', error.message);
    });
}


const form = document.querySelector('#movieForm');
if (form) {
  form.addEventListener('submit', formSubmit);
}