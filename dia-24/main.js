
// /*----------------- FETCH --------------------*/
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respuesta) => respuesta.json())
// .then((data) => {
//     console.log(data);
// });

const contenedor = document.getElementById("personajes");

fetch("https://api.api-onepiece.com/v2/characters/en")
  .then((respuesta) => respuesta.json())
  .then((data) => {
   
    const primeros = data.slice(0, 10);

    primeros.forEach((personaje) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${personaje.name}</h3>
        <p><strong>Trabajo:</strong> ${personaje.job || "Desconocido"}</p>
        <p><strong>Tripulación:</strong> ${personaje.crew?.name || "Sin tripulación"}</p>
        <p><strong>Edad:</strong> ${personaje.age?.replace("ans", "").trim() || "?"} años</p>
        <p><strong>Recompensa:</strong> ${personaje.bounty || "No registrada"}</p>
      `;
      contenedor.appendChild(card);
    });
  })
  .catch((error) => {
    contenedor.innerHTML = `<p style="color:red;">Error al obtener datos: ${error.message}</p>`;
  });

