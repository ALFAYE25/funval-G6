let input = document.querySelector("#tarea");
let botoncito = document.querySelector("#adicionar");
let listado = document.querySelector("#tareas");

botoncito.addEventListener("click", () => {
  if (input.value.trim() === "") return; // evita tareas vacías
  listado.innerHTML += `
    <li>
      ${input.value}
      <button class="eliminar">X</button>
      <button class="progreso">En progreso</button>
    </li>
  `;
  input.value = "";
});

listado.addEventListener("click", (e) => {
  // Si hacen clic en el botón de eliminar
  if (e.target.classList.contains("eliminar")) {
    let padre = e.target.parentElement;
    padre.remove();
  }

  // Si hacen clic en el botón de progreso
  if (e.target.classList.contains("progreso")) {
    let padre = e.target.parentElement;
    padre.style.backgroundColor = "yellow";
  }
});
