function iniciarJuego() {
    const listaPersonajes = document.getElementById("listaPersonajes");
    listaPersonajes.innerHTML = ""; 

    const imagenesMezcladas = imagenesDatos.sort(() => Math.random() - 0.5).slice(0, 16);

    imagenesMezcladas.forEach(nombreArchivo => {
        const contenedorCarta = document.createElement("div");

        const imagen = document.createElement("img");
        imagen.src = "imagenes/" + nombreArchivo.imagen;
        
        const texto = document.createElement("div");
        texto.innerHTML = `<strong>${nombreArchivo.nombre}</strong><br>
        <small>${nombreArchivo.pelicula}</small>`;

        imagen.onclick = function() {
            if (imagen.src.includes("miyazaki.jpeg")) {
                imagen.src = "imagenes/" + nombreArchivo.imagen;
            } else {
                imagen.src = "imagenes/miyazaki.jpeg";
            }
        };

        contenedorCarta.appendChild(imagen);
        contenedorCarta.appendChild(texto);

        listaPersonajes.appendChild(contenedorCarta);
    });

    nuevoPersonajeAdivinar(imagenesMezcladas);
}