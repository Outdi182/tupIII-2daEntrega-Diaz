const tarjetas = document.querySelectorAll(".tarjeta");
const contador = document.getElementById("contadorSeleccionadas");

function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".selected");
    contador.textContent = `Seleccionadas: ${seleccionadas.length}`;
}

tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        tarjeta.classList.toggle("selected");
        actualizarContador();
    });
});