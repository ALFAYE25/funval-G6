/* let input = document.querySelector("#tarea");
let botoncito = document.querySelector("#adicionar");
let listado = document.querySelector(".tareas");

botoncito.addEventListener("click", () => {
  listado.innerHTML += `<li>${input.value}<button class="eliminar">X</button></li>`;
  input.value = "";
});

listado.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    console.log("encontre el boton");
    let padre = e.target.parentElement;
    console.log(padre);
    padre.remove();
  }
}); */
/* 
    realizar del listado de tareas un botoncito adicional q indique q la tarea 
    esta en progreso cambiando el color de fondo a un amarillo
*/

/* let papa = document.querySelector(".padre");
let hijo = document.querySelector(".hijo");
let nieto = document.querySelector(".nieto");

papa.addEventListener("click", () => {
  console.log("se hizo click en el papa");
});
hijo.addEventListener("click", () => {
  console.log("se hizo click en el hijo");
});
nieto.addEventListener("click", () => {
  console.log("se hizo click en el nieto");
});
 */


const peliculas = [
  { id: 1, nombre: "Spiderman", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgKM88tLg8yO4GItvUqrfel2lbEFEviUdIg&s", año: 2002, descripcion: "Spiderman es un superhéroe que trabaja como periodista Peter Parker.", reparto: ["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"] },
  { id: 2, nombre: "Batman", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyGMawb0GHJfihSToAs1Sn7mI5ljaO2_SvQ&s", año: 2005, descripcion: "Batman lucha contra el crimen en Gotham City.", reparto: ["Christian Bale", "Michael Caine", "Heath Ledger"] },
  { id: 3, nombre: "Inception", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s", año: 2010, descripcion: "Explora el mundo de los sueños.", reparto: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] },
  { id: 4, nombre: "Interstellar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6O0pdx_hMlbIvVooTWrjlr726tc-CRLFUUA&s", año: 2014, descripcion: "Viaje a través de un agujero de gusano en busca de un nuevo hogar.", reparto: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"] },
  { id: 5, nombre: "Dunkirk", img: "https://www.todoliteratura.es/fotos/24/Dunkerque.jpg", año: 2017, descripcion: "Evacuación de las fuerzas aliadas de Dunkerque.", reparto: ["Fionn Whitehead", "Tom Glynn-Carney", "Jack Lowden"] }
];

const contenedor = document.querySelector(".pelicula-container");
const modal = document.querySelector(".modal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close-btn");


peliculas.forEach(({ id, nombre, img, año, descripcion }) => {
  const card = document.createElement("div");
  card.className = "max-w-sm flex flex-col items-center bg-white border rounded-lg shadow-sm p-5";
  card.innerHTML = `
    <img class="rounded-t-lg" src="${img}" alt="${nombre}">
    <h5 class="text-2xl font-bold mb-2">${nombre} - ${año}</h5>
    <p class="text-gray-700 mb-3">${descripcion}</p>
    <button class="botonModal px-3 py-2 bg-blue-700 text-white rounded" data-id="${id}">Leer más</button>
  `;
  contenedor.appendChild(card);
});


contenedor.addEventListener("click", (e) => {
  const btn = e.target.closest(".botonModal");
  if (btn) {
    const pelicula = peliculas.find(p => p.id == btn.dataset.id);
    modalBody.innerHTML = `
      <h3>${pelicula.nombre}</h3>
      <p>Reparto:</p>
      <ul>
        ${pelicula.reparto.map(actor => `<li>${actor}</li>`).join("")}
      </ul>
    `;
    modal.style.display = "flex";
  }
});


closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

