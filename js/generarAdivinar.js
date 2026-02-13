function nuevoPersonajeAdivinar(imagenSeleccionada) {
    const contenedorAdivinar = document.getElementById("personajeAdivinar");
    
    const imagenAleatoria = imagenSeleccionada[Math.floor(Math.random() * imagenSeleccionada.length)];
    
    contenedorAdivinar.innerHTML = `
        <h2>Personaje a adivinar:</h2>
        <img src='imagenes/${imagenAleatoria.imagen}'>
        <div>
            <strong>${imagenAleatoria.nombre}</strong><br>
            <small>${imagenAleatoria.pelicula}</small>
        </div>
    `;
}