const meriendas = [
    {
        nombre: "Tostadas con mermelada",
        descripcion: "Tostadas crujientes acompañadas con mermelada de frutas."
    },
    {
        nombre: "Yogur con cereal",
        descripcion: "Yogur natural con cereal, ideal para una merienda ligera."
    },
    {
        nombre: "Fruta fresca",
        descripcion: "Una opción saludable con frutas de estación."
    },
    {
        nombre: "Medialunas",
        descripcion: "Clásicas medialunas dulces para acompañar tu infusión."
    },
    {
        nombre: "Carlito de jamón y queso",
        descripcion: "Tostada de jamón y queso, para 4 personas"
    }
];

const listaMeriendas = document.getElementById("listaMeriendas");
const resultado = document.getElementById("resultado");
const btnCantidad = document.getElementById("btnCantidad");

const tarjetas = meriendas.map((merienda) => {
    return `
        <div class="card">
            <h3>${merienda.nombre}</h3>
            <p>${merienda.descripcion}</p>
        </div>
    `;
});

listaMeriendas.innerHTML = tarjetas.join("");

btnCantidad.addEventListener("click", function () {
    resultado.textContent = `El menu tiene ${meriendas.length} meriendas.`;
});