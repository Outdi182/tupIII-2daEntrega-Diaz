const meriendas = [
    "Tostadas con mermelada",
    "Yogur con cereal",
    "Fruta fresca",
    "Medialunas",
    "Sándwich de jamón y queso"
];

const listaMeriendas = document.getElementById("listaMeriendas");
const resultado = document.getElementById("resultado");
const btnCantidad = document.getElementById("btnCantidad");

const tarjetas = meriendas.map((merienda) => {
    return `<div class="card">
                <h3>${merienda}</h3>
                <p>Opción simple para una merienda.</p>
            </div>`;
});

listaMeriendas.innerHTML = tarjetas.join("");

btnCantidad.addEventListener("click", function () {
    resultado.textContent = `El menu tiene ${meriendas.length} meriendas.`;
});