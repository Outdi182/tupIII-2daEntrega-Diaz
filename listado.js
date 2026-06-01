const productos = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Banana", categoria: "Fruta" },
    { nombre: "Mandarina", categoria: "Fruta" },
    { nombre: "Pan", categoria: "Panificación" },
    { nombre: "Galletitas", categoria: "Panificación" },
    { nombre: "Yogur", categoria: "Lácteo" }
];

const contenedorListado = document.getElementById("contenedorListado");
const btnTodos = document.getElementById("btnTodos");
const btnFrutas = document.getElementById("btnFrutas");

function mostrarProductos(lista) {
    contenedorListado.innerHTML = "";

    lista.forEach(function (producto) {
        contenedorListado.innerHTML += `
            <div class="card">
                <h3>${producto.nombre}</h3>
                <p>Categoría: ${producto.categoria}</p>
            </div>
        `;
    });
}

mostrarProductos(productos);

btnTodos.addEventListener("click", function () {
    mostrarProductos(productos);
});

btnFrutas.addEventListener("click", function () {
    const frutas = productos.filter(function (producto) {
        return producto.categoria === "Fruta";
    });

    mostrarProductos(frutas);
});