// 🔹 1. Mostrar 10 perritos aleatorios
fetch("https://dog.ceo/api/breeds/image/random/10")
  .then(respuesta => respuesta.json())
  .then(datos => {
    const contenedorAleatorios = document.getElementById("perros-aleatorios");
    mostrarImagenes(datos.message, contenedorAleatorios);
  });

// 🔹 2. Cargar lista de razas disponibles
fetch("https://dog.ceo/api/breeds/list/all")
  .then(respuesta => respuesta.json())
  .then(datos => {
    const selectorRaza = document.getElementById("selector-raza");
    const selectorRazaPrincipal = document.getElementById("selector-raza-principal");

    // Agregamos cada raza a los selectores
    for (let raza in datos.message) {
      const opcion = document.createElement("option");
      opcion.value = raza;
      opcion.textContent = raza;
      selectorRaza.appendChild(opcion);
      selectorRazaPrincipal.appendChild(opcion.cloneNode(true));
    }

    // 🐾 Cuando elija una raza
    selectorRaza.addEventListener("change", evento => {
      const razaElegida = evento.target.value;
      fetch(`https://dog.ceo/api/breed/${razaElegida}/images/random/10`)
        .then(respuesta => respuesta.json())
        .then(datos => {
          const contenedorRaza = document.getElementById("perros-por-raza");
          mostrarImagenes(datos.message, contenedorRaza);
        });
    });

    // 🐶 Cuando elija una raza principal (para cargar subrazas)
    selectorRazaPrincipal.addEventListener("change", evento => {
      const razaSeleccionada = evento.target.value;
      const selectorSubraza = document.getElementById("selector-subraza");
      selectorSubraza.innerHTML = "";

      const subrazas = datos.message[razaSeleccionada];

      if (subrazas.length === 0) {
        selectorSubraza.innerHTML = "<option>No tiene subrazas</option>";
        const contenedorSubraza = document.getElementById("perros-por-subraza");
        contenedorSubraza.innerHTML = "<p>Esta raza no tiene subrazas disponibles 🐾</p>";
        return;
      }

      // Agregar subrazas al selector
      subrazas.forEach(subraza => {
        const opcion = document.createElement("option");
        opcion.value = subraza;
        opcion.textContent = subraza;
        selectorSubraza.appendChild(opcion);
      });

      // Mostrar automáticamente las imágenes de la primera subraza
      const primera = subrazas[0];
      cargarSubraza(razaSeleccionada, primera);
    });
  });

// 🔹 3. Cuando el usuario cambie la subraza
const selectorSubraza = document.getElementById("selector-subraza");
selectorSubraza.addEventListener("change", () => {
  const razaPrincipal = document.getElementById("selector-raza-principal").value;
  const subrazaElegida = selectorSubraza.value;
  cargarSubraza(razaPrincipal, subrazaElegida);
});

// 🔹 Función para cargar imágenes de una subraza
function cargarSubraza(raza, subraza) {
  fetch(`https://dog.ceo/api/breed/${raza}/${subraza}/images/random/10`)
    .then(respuesta => respuesta.json())
    .then(datos => {
      const contenedorSubraza = document.getElementById("perros-por-subraza");
      mostrarImagenes(datos.message, contenedorSubraza);
    });
}

// 🔹 Función reutilizable para mostrar imágenes
function mostrarImagenes(lista, contenedor) {
  contenedor.innerHTML = "";
  lista.forEach(imagen => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const foto = document.createElement("img");
    foto.src = imagen;

    tarjeta.appendChild(foto);
    contenedor.appendChild(tarjeta);
  });
}
