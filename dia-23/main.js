// /*--------------------SINCRONO-------------------------*/
// console.log("Alfredo");
// console.log("Kevin");
// console.log("David");
// console.log("Juan");
// console.log("Boren");
// console.log("Emanuel");

// /*--------------------ASINCRONO------------------------*/
// console.log("Ibraim")
// setTimeout(() => {
//     console.log("Kevin");
// }, 5000);

// console.log("Belen");
// console.log("Edmund");
// setTimeout(() => {
//     console.log("Jorge");
// }, 3000);
// console.log("moises");


/* ejemplos de asincronía y sincronía*/
// console.log("levantarse");
// console.log("prender lap");
// console.log("abrir programa");
// console.log("abrir navegador");
// console.log("esperar sesión");



// console.log("encender lavadora");
// setTimeout(() => {
//     console.log("poner ropa");
// }, 4000 );

// console.log("poner jabón");
// console.log("cerrar tapa")
// setTimeout(() => {
// console.log("inicio de lavado");
// }, 8000);
// console.log("llenado de agua");

/*--------------------------------PROBLEMA DE TRABAJAR CON ASINCRONIA --------------------------------*/


/*---------------------------- APRENDER A CREAR UNA PROMESA --------------------*/
// const promesaEstudiantes = new Promise((resolve, reject ) => {
// setTimeout(() => {
//     let resuelto = false;
//     if(resuelto) {
//         resolve(estudiantes);

//     }else {
//         reject("mala conexión con el servidor");
//     }
// }, 3000);
// });


// /*--------------- CONSUME UNA PROMESA -----------*/
// promesaEstudiantes
// .then((respuesta) => {
//     console.log(respuesta);
// })
// .catch((err) => {
//     console.log(err);
// });


/*----------- crear una promesa y consumirla---------*/
// const productos = ["Laptop", "Mouse", "Monitor", "Teclado", "SSD"];
// const promesaProductos = new Promise((resolve, reject) =>  {
// setTimeout(() => {
// let hayConexion = true;

// if (hayConexion) {
//     resolve(productos);
// } else {
//     reject("Servidor no disponible, intenta más tarde");
// }
// }, 2000);

// });


// promesaProductos
// .then((respuesta) => {
//     console.log("Lista de productos recibida:");
//     console.log(respuesta);
// })
// .catch((error) => {
//     console.log(error);
// });

/* ----------------EJERCICIOS PROMESAS---------------- */
function mostrar(id, contenido) {
  document.getElementById(id).innerHTML = contenido;
}

/* ------------------ 1. Promesa de productos ------------------ */
const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const conexion = false;
    if (conexion) {
      const productos = [
        { id: 1, nombre: "Laptop", precio: 1200 },
        { id: 2, nombre: "Mouse", precio: 25 },
        { id: 3, nombre: "Teclado", precio: 45 },
      ];
      resolve(productos);
    } else {
      reject("No se pudieron cargar los productos");
    }
  }, 1000);
});

// getProductos
//   .then((productos) => {
//     let html = "<h2>Productos</h2><ul>";
//     productos.forEach(p => html += `<li>${p.nombre} - $${p.precio}</li>`);
//     html += "</ul>";
//     mostrar("productos", html);
//   })
//   .catch((error) => {
//     mostrar("productos", `<h2>Error en productos</h2><p>${error}</p>`);
//   });


/* ----------------- APLICANDO ASYNC Y AWAIT -----------------------*/

async function mostrarProductos() {
    try {
        const productos = await getProductos;
        let html = "<h2>Productos</h2><ul>";
        productos.forEach(p => {
            html += `<li>${p.nombre} - $${p.precio}</li>`;
        });
        html += "</ul>";
        mostrar("productos", html);
    } catch (error) {
        mostrar("productos", `<h2>Error en productos</h2><p>${error}</p>`);
    }
    
}
mostrarProductos();


/* ------------------ 2. Promesa de notas ------------------ */
const getNotas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const conexion = true;
    if (conexion) {
      const notas = [
        { estudiante: "Ana", notas: [18, 15, 19] },
        { estudiante: "Luis", notas: [12, 14, 16] },
        { estudiante: "María", notas: [20, 19, 18] },
      ];
      resolve(notas);
    } else {
      reject("No se pudieron obtener las notas");
    }
  }, 1500);
});

getNotas
  .then((notas) => {
    let html = "<h2>Notas</h2><ul>";
    notas.forEach(n => {
      const promedio = (n.notas.reduce((a,b)=>a+b) / n.notas.length).toFixed(1);
      html += `<li>${n.estudiante} - Promedio: ${promedio}</li>`;
    });
    html += "</ul>";
    mostrar("notas", html);
  })
  .catch((error) => {
    mostrar("notas", `<h2>Error en notas</h2><p>${error}</p>`);
  });

/* ------------------ 3. Promesa que puede fallar ------------------ */
const getUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve([
        { id: 1, nombre: "Kevin" },
        { id: 2, nombre: "Carla" },
        { id: 3, nombre: "Diego" },
      ]);
    } else {
      reject("Error al obtener usuarios (modo aleatorio)");
    }
  }, 1200);
});

// getUsuarios
//   .then((usuarios) => {
//     let html = "<h2>Usuarios</h2><ul>";
//     usuarios.forEach(u => html += `<li>${u.nombre}</li>`);
//     html += "</ul>";
//     mostrar("usuarios", html);
//   })
//   .catch((error) => {
//     mostrar("usuarios", `<h2>Error en usuarios</h2><p>${error}</p>`);
//   });


/* ----------------- APLICANDO ASYNC Y AWAIT -----------------------*/

async function mostrarUsuarios() {
  try {
    const usuarios = await getUsuarios;
    let html = "<h2>Usuarios</h2><ul>";
    usuarios.forEach(u => {
      html += `<li>${u.nombre}</li>`;
    });
    html += "</ul>";
    mostrar("usuarios", html);
  } catch (error) {
    mostrar("usuarios", `<h2>Error en usuarios</h2><p>${error}</p>`);
  }
}
mostrarUsuarios();


/* ------------------ 4. Promesa de cursos ------------------ */
const getCursos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const conexion = true;
    if (conexion) {
      const cursos = [
        { codigo: "INF101", nombre: "Programación I" },
        { codigo: "INF202", nombre: "Estructuras de Datos" },
        { codigo: "INF303", nombre: "Base de Datos" },
      ];
      resolve(cursos);
    } else {
      reject("No se pudieron cargar los cursos");
    }
  }, 800);
});

getCursos
  .then((cursos) => {
    let html = "<h2>Cursos</h2><ul>";
    cursos.forEach(c => html += `<li>${c.codigo} - ${c.nombre}</li>`);
    html += "</ul>";
    mostrar("cursos", html);
  })
  .catch((error) => {
    mostrar("cursos", `<h2>Error en cursos</h2><p>${error}</p>`);
  });

/* ------------------ 5. Promesa de tareas ------------------ */
const getTareas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const conexion = true;
    if (conexion) {
      const tareas = [
        { id: 1, titulo: "Estudiar Promesas", completada: false },
        { id: 2, titulo: "Hacer ejercicio", completada: true },
        { id: 3, titulo: "Leer un libro", completada: false },
      ];
      resolve(tareas);
    } else {
      reject("No se pudieron obtener las tareas");
    }
  }, 2000);
});

getTareas
  .then((tareas) => {
    let html = "<h2>Tareas</h2><ul>";
    tareas.forEach(t => {
      html += `<li>${t.titulo} - ${t.completada ? "Completada" : "Pendiente"}</li>`;
    });
    html += "</ul>";
    mostrar("tareas", html);
  })
  .catch((error) => {
    mostrar("tareas", `<h2>Error en tareas</h2><p>${error}</p>`);
  });
