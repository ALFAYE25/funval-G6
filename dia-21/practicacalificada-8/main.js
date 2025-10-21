/*PRACTICA CALIFICADA 8
Objetivo:
Aplicar desestructuración, operador spread/rest y manipulación del DOM

Instrucciones generales:

Cada ejercicio debe implementarse en JavaScript dentro de un archivo HTML.

Usar funciones para organizar el código.

No mutar los arrays u objetos originales; usar spread/rest para crear copias cuando sea necesario.

Manipular el DOM para mostrar los resultados (tarjetas, tablas o listas según corresponda). */


// Ejercicio 1 — Tarjetas de Usuarios
// Crea una función que reciba un objeto usuario con propiedades:
// { nombre, edad, pais, ...resto }.

// Desestructura las propiedades principales y usa el operador rest para capturar el resto.

// Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.

// Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva tarjeta al contenedor.

function crearTarjetaUsuario(usuario) {
  let { nombre, edad, pais, ...resto } = usuario;

  let tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  tarjeta.innerHTML = `
    <h3>${nombre}</h3>
    <p>Edad: ${edad}</p>
    <p>País: ${pais}</p>
    <h4>Otros datos:</h4>
  `;

  for (let [clave, valor] of Object.entries(resto)) {
    let p = document.createElement('p');
    p.textContent = `${clave}: ${valor}`;  
    tarjeta.appendChild(p);
  }

  document.getElementById('contenedorUsuarios').appendChild(tarjeta);
}


crearTarjetaUsuario({
  nombre: "Alfredo",
  edad: 25,
  pais: "México",
  ocupacion: "Estudiante",
  hobbies: "Tecnología"
});

crearTarjetaUsuario({
  nombre: "Mia",
  edad: 30,
  pais: "Chile",
  profesion: "Ingeniera",
  pasatiempo: "Leer"
});






// Ejercicio 2 — Tabla de Productos
// Crea una función renderProducto que reciba un objeto producto con propiedades:
// { nombre, precio, stock, ...rest }.

// Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las propiedades adicionales.

// Agrega varios productos para mostrar la funcionalidad.

 function renderProducto(producto) {
  let { nombre, precio, stock, ...rest } = producto;

  let tbody = document.querySelector('#tablaProductos tbody');
  let fila = document.createElement('tr');

  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>${stock}</td>
  `;

  let extrasCell = document.createElement('td');
  extrasCell.textContent = JSON.stringify(rest);
  fila.appendChild(extrasCell);

  tbody.appendChild(fila);
}

renderProducto({
  nombre: "Laptop",
  precio: 12000,
  stock: 5,
  marca: "HP",
  garantia: "1 año"
});

renderProducto({
  nombre: "Mouse",
  precio: 200,
  stock: 50,
  color: "Negro",
  tipo: "Inalámbrico"
});






// Ejercicio 3 — Lista de Tareas
// Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.

// La función debe crear un <li> con la información principal y un botón “Ver más”.

// Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).

// Mantén un array de tareas usando spread para no mutar el original.


let tareas = [];

function agregarTarea(tarea) {
  let { titulo, descripcion, ...extra } = tarea;

  tareas = [...tareas, tarea];

  let li = document.createElement('li');
  li.textContent = `${titulo} - ${descripcion} `;

  let boton = document.createElement('button');
  boton.textContent = "Ver más";

  boton.addEventListener('click', function() {
    console.log("Datos adicionales:", extra);
  });

  li.appendChild(boton);
  document.getElementById('listaTareas').appendChild(li);
}


agregarTarea({
  titulo: "Estudiar JS",
  descripcion: "Repasar desestructuración",
  dificultad: "Media",
  duracion: "2 horas"
});

agregarTarea({
  titulo: "Hacer ejercicio",
  descripcion: "30 min de cardio",
  lugar: "Parque",
  prioridad: "Alta"
});







// Ejercicio 4 — Tabla de Estudiantes
// Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos estudiantes.

// Cada estudiante tiene { nombre, edad, notas }.

// Desestructura para calcular el promedio de notas y genera dinámicamente una tabla en el DOM.

// Usa spread para agregar estudiantes sin mutar el array original.

// Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a renderizar la tabla.

let listaEstudiantes = [];

function mostrarEstudiantes(...estudiantes) {
  listaEstudiantes = [...listaEstudiantes, ...estudiantes];

  let tbody = document.querySelector('#tablaEstudiantes tbody');
  tbody.innerHTML = "";

  listaEstudiantes.forEach(est => {
    let { nombre, edad, notas } = est;
    let promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    let fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${edad}</td>
      <td>${promedio.toFixed(2)}</td>
    `;

    tbody.appendChild(fila);
  });
}


mostrarEstudiantes(
  { nombre: "Carlos", edad: 20, notas: [15, 18, 19] },
  { nombre: "Ana", edad: 22, notas: [14, 16, 17] }
);

mostrarEstudiantes(
  { nombre: "Luis", edad: 21, notas: [20, 19, 18] }
);






// Ejercicio 5 — Configuración de App
// Crea una función configurarApp que reciba un objeto { titulo, version, ...resto }.

// Desestructura las propiedades principales y usa rest para capturar las adicionales.

// Muestra en el DOM el título y versión, y lista las propiedades adicionales.

// Permite actualizar la configuración creando un nuevo objeto con spread y re-renderiza la información sin recargar la página.


let config = {
  titulo: "Mi Aplicación",
  version: "1.0",
  autor: "Alfredo",
  tema: "Claro"
};

function configurarApp(conf) {
  let { titulo, version, ...resto } = conf;

  
  document.getElementById('tituloApp').textContent = titulo;
  document.getElementById('versionApp').textContent = "Versión: " + version;

  
  let ul = document.getElementById('extrasApp');
  ul.innerHTML = "";
  for (let [clave, valor] of Object.entries(resto)) {
    let li = document.createElement('li');
    li.textContent = `${clave}: ${valor}`;
    ul.appendChild(li);
  }

 
  if (resto.tema === "Oscuro") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#f0f0f0";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}


configurarApp(config);


document.getElementById('actualizarConfig').addEventListener('click', function() {
 
  let nuevoTema = config.tema === "Oscuro" ? "Claro" : "Oscuro";

  let nuevaConfig = { ...config, version: "1.1", tema: nuevoTema };
  config = nuevaConfig;
  configurarApp(config);
});
