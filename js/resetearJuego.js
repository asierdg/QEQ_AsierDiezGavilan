document.getElementById("botonReset").onclick = function() {
    const confirmar = confirm("¿Quieres resetear el juego?");
    if (confirmar) {
        iniciarJuego();
    }
};