const renderCards = (data) => {
  const contenedor = document.getElementById("contenedorPeliculas");
  if (!contenedor) {
    console.error("No se encontró el contenedor con id 'contenedorPeliculas' en el DOM.");
    return;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.warn("No hay datos para renderizar o los datos no son un arreglo válido:", data);
    contenedor.innerHTML = "<p>No se encontraron películas para mostrar.</p>";
    return;
  }

  // Limpiamos el contenedor antes de agregar nuevas tarjetas
  contenedor.innerHTML = "";

  console.log(`Renderizando ${data.length} películas`);

  data.forEach((pelicula, index) => {
    console.log(`Renderizando película #${index + 1}:`, pelicula);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("tarjeta", "bg-secondary", "text-light", "p-3", "rounded", "shadow-sm");

    const tituloTarjeta = document.createElement("p");
    tituloTarjeta.classList.add("titulo", "fs-5", "fw-semibold");
    tituloTarjeta.textContent = pelicula.title || "Título no disponible";

    const posterT = document.createElement("img");
    posterT.classList.add("poster");
    posterT.src = pelicula.poster 
    posterT.alt = `Poster de ${pelicula.title || "película"}`;

    const estreno = document.createElement("p");
    estreno.classList.add("estreno");
    estreno.textContent = `Year: ${pelicula.year || "Desconocido"}`;

    const duracion = document.createElement("p");
    duracion.classList.add("duracion");
    duracion.textContent = `Duration: ${pelicula.duration || "No disponible"}`;

    const rate = document.createElement("p");
    rate.classList.add("rate");
    rate.textContent = `⭐ ${pelicula.rate || "N/A"}`;

    tarjetas.appendChild(tituloTarjeta);
    tarjetas.appendChild(posterT);
    tarjetas.appendChild(estreno);
    tarjetas.appendChild(duracion);
    tarjetas.appendChild(rate);
    contenedor.appendChild(tarjetas);
  });
};

export { renderCards };
