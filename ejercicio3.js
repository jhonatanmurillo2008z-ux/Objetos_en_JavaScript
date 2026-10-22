/*El programa arranca con este objeto:
let producto = { nombre: "Morral", precio: 85000, stock: 12 };
Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
Mostrar ambos objetos para demostrar que el original quedó intacto.*/

let producto = {
    nombre: "Morral",
    precio: 85000,
    stock: 12
};
function aplicarDescuento(producto, porcentaje) {
    let oferta = {
        nombre: producto.nombre,
        precio: producto.precio * (1 - porcentaje / 100),
        stock: producto.stock,
        precioAnterior: producto.precio
    };

    return oferta;
}
function mostrarProducto(producto) {
    if (producto.precioAnterior) {
        console.log("En oferta: " + producto.nombre + " - $" + producto.precio + " (antes $" + producto.precioAnterior + ") - " + producto.stock + " unidades");
    } else {
        console.log("Original: " + producto.nombre + " - $" + producto.precio + " - " + producto.stock + " unidades");
    }
}
let porcentaje = Number(prompt("Porcentaje de descuento:"));

let oferta = aplicarDescuento(producto, porcentaje);

mostrarProducto(producto);
mostrarProducto(oferta);

