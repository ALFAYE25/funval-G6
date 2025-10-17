/* ============================
 🟢 BLOQUE 1: SELECTORES + MODIFICADORES (Nivel Básico)
 Duración sugerida: 30 minutos
============================ */

/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */
// let titulo =
/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */
let elemento = document.querySelector(".parrafo");
elemento.textContent = "Modificado";

/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */

/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */
let imagen = document.getElementById("foto");
imagen.setAttribute("src", "https://i.pinimg.com/736x/df/ba/92/dfba92b101b4e03442f44d02bb019e7d.jpg")
alt=""

/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */

/* 6. Cambia el contenido de un div usando innerHTML. */
let box = document.getElementById("box");
box.innerHTML = `
  <h3>Contenido modificado</h3>
  <p>Este texto fue cambiado usando <strong>innerHTML</strong>.</p>
  <button>Haz clic aquí</button>
`;
/* 7. Cambia el contenido de un párrafo usando textContent. */

/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */

// let titulo = document.getElementById("titulo");

// titulo.classList.add("resaltado");

/* 9. Elimina una clase existente usando classList.remove(). */

/* 10. Alterna una clase (toggle) en un elemento. */
let titulo = document.getElementById("titulo");
let boton =document.getElementById("boton");

boton.addEventListener("click", function() {
    titulo.classList.toggle("resaltado");
});

/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */

/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */
let contenedor = document.getElementById("box");
console.log(contenedor.firstElementChild);

/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */

/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */
let item1 = document.querySelector("#lista");
console.log(item1.nextElementSibling);


/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */

/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. */
let hijosBox = contenedor.children.length;
console.log("Número de hijos en #box:", hijosBox);


/* 17. Accede a todos los hijos de un contenedor usando children y cambia el color de cada uno. */

/* 18. Usa firstChild para mostrar en consola el primer nodo hijo (puede ser texto o elemento). */

console.log(contenedor.firstChild);
/* 19. Accede al nodo padre de un párrafo y cambia su color de fondo. */

/* 20. Selecciona un elemento y recorre sus hijos con un bucle for para cambiarles el estilo. */

/* ============================
 🔴 BLOQUE 3: COMBINADOS (Selectores + Modificadores + Navegación)
 Duración sugerida: 30 minutos
============================ */

/* 21. Selecciona un contenedor, accede a su primer hijo y cambia su texto. */

/* 22. Selecciona una lista (ul), accede al segundo li y cámbiale el color de fondo. */

/* 23. Selecciona el tercer hijo de un contenedor y elimina una clase de él. */

/* 24. Selecciona un contenedor y cambia el texto de todos sus hijos. */

/* 25. Selecciona un div, accede a su padre y cambia su borde. */

/* 26. Selecciona el primer elemento de una lista y cambia el texto de su siguiente hermano. */

/* 27. Selecciona un elemento, navega a su padre y luego a su primer hijo para cambiarle el estilo. */

/* 28. Selecciona un contenedor con varios elementos y alterna una clase en cada uno de sus hijos. */

/* 29. Usa innerHTML para insertar una etiqueta <strong> dentro de un párrafo hijo. */

/* 30. Recorre todos los hijos de un contenedor y cambia el contenido de cada uno con un texto numerado. */
