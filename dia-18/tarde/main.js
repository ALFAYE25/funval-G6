/*------------------ 6. Crear funciones separadas para cada tarea (ej. filtrarPorPrecio, aplicarDescuento,
calcularPromedio, etc.)*/

// Funcion que muestra todos los productos //

function mostrarProductos(lista) {
    lista.forEach((producto, index) => {
        console.log
        (`$index + 1}.${producto.nombre} - ${producto.sabor} - ${producto.precio} - Stock: ${producto.stock} - ${producto.categoria} (${producto.estado})`

        );
    });
}

// funcion para filtrar producto por precio

function filtrarPorPrecio(lista,minimo) {
    return lista.filter(producto => producto.precio > minimo);
}

// filtrar productos con stock bajo (menor a 10 piezas)
function filtrarStock(lista) {
    return lista.filter(producto => producto.stock < 10);
}

// funcion para filtrar productos activos
function filtrarActivos(lista) {
    return lista.filter(producto => producto.estado === "activo");
}

// funcion para aplicar 15% de descuento y devolver un nuevo array
function aplicarDescuento(lista) {
    return lista.map(producto => ({
        nombre: producto.nombre,
        categoria: producto.categoria,
        precioDescuento: `$${(producto.precio * 0.85) .toFixed(2)}`

    }));
}

// funcion para calcular el precio de productos activos
function calcularPromedioActivos (lista) {
    let activos = filtrarActivos(lista);
    let total = activos.reduce((suma, producto) => + producto.precio, 0);
    return `$${(total / activos.length).toFixed(2)}`;
}
