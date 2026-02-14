// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function () {

    // Botón Descargar App
    const botonDescargar = document.querySelector("#hero button");
    botonDescargar.addEventListener("click", function () {
        alert("La app estará disponible próximamente 🚀");
    });

    // Botón Restaurantes
    const botonRestaurantes = document.querySelector("#restaurantes button");
    botonRestaurantes.addEventListener("click", function () {
        alert("Formulario para restaurantes en desarrollo.");
    });

    // Botón Repartidores
    const botonRepartidores = document.querySelector("#repartidores button");
    botonRepartidores.addEventListener("click", function () {
        alert("Formulario para repartidores en desarrollo.");
    });

    // Botón Contacto
    const botonContacto = document.querySelector("#contacto button");
    botonContacto.addEventListener("click", function () {
        alert("Pronto habilitaremos contacto directo.");
    });

});
