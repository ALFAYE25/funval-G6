
/* -----------------------------------------------------------
TANDA DE 30 EJERCICIOS — Desestructuración + Spread 
----------------------------------------------------------- */

//  BLOQUE 1: Desestructuración aplicada (objetos + arrays)
// Objetivo: aplicar desestructuración en escenarios reales.

// 1. Dado un objeto usuario con {nombre, edad, direccion: {ciudad, pais}},
// desestructura todos los valores y muestra un mensaje con ellos.

// 2. Dado un array de estudiantes con objetos {nombre, edad, notas: [..]},
// desestructura para obtener nombre y calcular promedio de notas.

let estudiantes = [
{ nombre: "Laura", edad:21, notas: [8, 8, 10]},
{ nombre: "Carlos", edad:22, notas: [7, 8, 9]},
{ nombre: "María", edad: 20, notas: [9, 9, 10]}

];

for (let estudiante of estudiantes) {

    let { nombre, notas } = estudiante;


let suma = notas.reduce((total, nota) => total + nota, 0);
let promedio = suma / notas.length;

console.log(`El estudiante ${nombre} tiene un promedio de ${promedio.toFixed(2)}`);
}




// 3. Desestructura el primer y último elemento de un array sin usar índices directos.

// 4. Dado un objeto producto con muchas propiedades, usa desestructuración con rest
// para extraer "nombre" y "precio" y guardar el resto en otra variable.

let producto = {
  nombre1: "Laptop Gamer ASUS ROG",
  precio: 28999,
  procesador: "Intel Core i9",
  memoriaRAM: "32GB",
  almacenamiento: "1TB SSD",
  tarjetaGrafica: "NVIDIA RTX 4080",
  pantalla: "17 pulgadas 240Hz",
  garantia: "2 años"
};


let { nombre1, precio, ...detallesRestantes } = producto;

console.log("Nombre del producto:", nombre1);
console.log("Precio:", precio);
console.log("Otros detalles:", detallesRestantes);





// 5. Usa desestructuración en parámetros de una función para recibir
// un objeto con {usuario, rol, activo} y mostrar solo usuario y rol.

// 6. Dado un array anidado [[1,2],[3,4],[5,6]], desestructura para obtener el número 6 directamente.

let numeros = [[1, 2], [3, 4], [5, 6]];
let [ , , [, seis]] = numeros;

console.log(seis);

// 7. Desestructura un array de 10 elementos para obtener solo los primeros 3
// y el resto guardarlo en otra variable con rest.

// 8. Dado un objeto con propiedades anidadas (empresa → departamento → empleado),
// desestructura en una sola línea para obtener el nombre del empleado.


let empresa = {
  nombre: "Tech Solutions",
  ubicacion: "Ciudad de México",
  departamento: {
    nombre: "Desarrollo Web",
    empleado: {
      nomb: "Laura Martínez",
      puesto: "Front End Developer",
      experiencia: 2
    }
  }
};

let { departamento: { empleado: { nomb } } } = empresa;

console.log("Nombre del empleado:", nomb);


// 9. Usa desestructuración para intercambiar el valor de dos variables sin usar una variable temporal.

// 10. Desestructura una función que retorna un array [estado, setEstado],
// similar a como hace React con useState().

//  BLOQUE 2: Operador Spread aplicado
// Objetivo: crear, combinar y actualizar datos sin mutar.

// 11. Combina dos arrays de objetos (estudiantes y nuevosEstudiantes)
// en uno solo usando spread y muestra la lista combinada.

// 12. A partir de un array de productos, agrega un nuevo producto usando spread
// sin usar push.

let productos = [
    { nombre: "mouse logitech", precio: 350 },
    { nombre: "teclado razor", precio: 750 },
    { nombre: "monitor acteck", precio: 4200 },

];

let nuevoProducto = { nombre: "Audífonos HyperX", precio: 950};

let productosActualizados = [...productos, nuevoProducto];
console.log("Lista actualizada de productos", productosActualizados);



// 13. A partir de un objeto usuario, crea uno nuevo con un rol adicional "admin"
// sin modificar el original.

// 14. Dado un array de usuarios, reemplaza el usuario con id = 3
// con uno nuevo usando map + spread.

let usuarios = [
{ id:1, nombre: "Ana", rol:"Desarrolladora frontend" },
{ id:2, nombre: "Alberto", rol:"Soporte TI" },
{ id:3, nombre: "Itzel", rol:"Calidad" },
{ id:4, nombre: "César", rol:"Administrador nube" },
{ id:5, nombre: "Luis", rol:"Administrador de redes" },
];

let usuarioNuevo = {id: 3, nombre: "Karla", rol: "Ciberseguridad" };

let usuariosActualizados = usuarios.map(usuario =>
    usuario.id === 3? {...usuario, ...usuarioNuevo }:usuario
);

console.log(usuariosActualizados);

// 15. Combina las propiedades de dos objetos que tienen claves repetidas
// y observa qué propiedad prevalece.

// 16. Crea una copia profunda de un array de objetos usando spread
// y modifica uno de ellos sin afectar el original.

let productos2 = [
  { id: 1, nombre: "Laptop Gamer", precio: 25000 },
  { id: 2, nombre: "Smartphone 5G", precio: 15000 },
  { id: 3, nombre: "Audífonos Bluetooth", precio: 2000 }
];

// Copia profunda a nivel de objetos
let copiaProductos = productos2.map(productos2 => ({ ...productos2 }));

// Modificamos un elemento en la copia
copiaProductos[1].precio = 18000;
copiaProductos[1].nombre = "Smartphone 5G - Edición Pro";

console.log("Original:", productos2);
console.log("Copia modificada:", copiaProductos);



// 17. A partir de un array de notas, usa spread para agregar múltiples notas de una sola vez.

// 18. Clona un objeto anidado y modifica solo una propiedad interna sin alterar el original.

// 19. Crea un nuevo objeto "pedido" combinando los datos de un cliente y un producto.

// 20. Usa spread para clonar un array grande y ordénalo sin modificar el original.

//  BLOQUE 3: Casos prácticos combinando Desestructuración + Spread
// Objetivo: simular casos reales tipo mini app / lógica avanzada.

// 21. Dado un array de estudiantes con notas, crea una función que
// devuelva un nuevo array con todos los estudiantes que tengan promedio > 80,
// usando desestructuración y spread para crear nuevos objetos.

// 22. Crea una función "actualizarStock" que reciba un array de productos y un id,
// y retorne un nuevo array con el producto incrementado en +1 stock sin mutar.

// 23. Crea una función "agregarTarea" que reciba una lista de tareas y una nueva tarea
// y retorne una nueva lista (no mutar el original).

// 24. Crea una función que reciba un objeto usuario y retorne otro
// con la propiedad "estado: activo" agregada usando spread.

// 25. Desestructura un array de objetos libros y devuelve un nuevo array
// solo con el título y autor usando map + desestructuración.

// 26. Crea una función que desestructure los parámetros {nombre, precio}
// de un producto y devuelva un nuevo objeto con un impuesto agregado (IVA).

// 27. Combina dos arrays de objetos usuarios y usa desestructuración para
// crear un nuevo array solo con {nombre, email} de cada uno.

// 28. Desestructura un objeto anidado de configuración de app para extraer
// opciones específicas y combina con otras opciones usando spread.

// 29. Simula una “actualización masiva”: dado un array de estudiantes,
// retorna un nuevo array con +1 año en edad para todos (sin mutar el original).

// 30. Crea una función que reciba un array de órdenes de compra y devuelva
// un nuevo array con el total calculado por cada orden usando desestructuración y spread.
