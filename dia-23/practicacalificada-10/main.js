// LISTA DE PRODUCTOS SIMULADA
const productos = [
  {
    id: 1,
    nombre: "Laptop ASUS ZenBook",
    categoria: "Computadoras",
    precio: 18500,
    imagen: "https://m.media-amazon.com/images/I/71yDPOErw3L._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    nombre: "Audífonos Sony WH-1000XM5",
    categoria: "Audio",
    precio: 6900,
    imagen: "https://www.sony.com.mx/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
  },
  {
    id: 3,
    nombre: "Smartphone Samsung Galaxy S23",
    categoria: "Celulares",
    precio: 21999,
    imagen: "https://m.media-amazon.com/images/I/51jZNC1g--L.jpg"
  },
  {
    id: 4,
    nombre: "Mouse Logitech MX Master 3",
    categoria: "Accesorios",
    precio: 1800,
    imagen: "https://m.media-amazon.com/images/I/61+OT7FPABL.jpg"
  },
  {
    id: 5,
    nombre: "Teclado Mecánico Redragon Kumara",
    categoria: "Periféricos",
    precio: 1200,
    imagen: "https://ddtech.mx/assets/uploads/6b700266c3f763d72e048d46fceb211c.jpg"
  },
  {
    id: 6,
    nombre: "Monitor LG Ultrawide 29''",
    categoria: "Monitores",
    precio: 5900,
    imagen: "https://www.lg.com/content/dam/channel/wcms/mx/images/monitores/29wq500-b_awm_enms_mx_c/gallery/DZ-2.jpg?w=800"
  }
];

// PROMESA SIMULANDO PETICIÓN A UN SERVIDOR
function obtenerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const debeFallar = Math.random() < 0.2; // 20% de probabilidad de error
      if (debeFallar) {
        reject("Error al obtener los productos. Inténtalo nuevamente.");
      } else {
        resolve(productos);
      }
    }, 1000);
  });
}

const contenedor = document.getElementById("productos");
const inputFiltro = document.getElementById("filtro");
const mensajeError = document.getElementById("error");

// FUNCIONES
function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = `
      <div class="col-span-full text-center text-gray-500 dark:text-gray-300">
        No se encontraron productos con ese nombre 😕
      </div>`;
    return;
  }

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className =
      "bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden";

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-40 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">${p.nombre}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-300">${p.categoria}</p>
        <p class="text-indigo-600 dark:text-indigo-400 font-bold mt-2">$${p.precio}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

async function iniciarCatalogo() {
  contenedor.innerHTML = `
    <div class="col-span-full text-center text-gray-500 dark:text-gray-300">
      Cargando catálogo...
    </div>`;

  try {
    const lista = await obtenerProductos();
    mostrarProductos(lista);
  } catch (error) {
    mostrarError(error);
  }
}

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.classList.remove("hidden");

  mensajeError.innerHTML += `
    <div class="mt-2">
      <button id="reintentar" class="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Volver a intentar
      </button>
    </div>
  `;

  document.getElementById("reintentar").addEventListener("click", () => {
    mensajeError.classList.add("hidden");
    iniciarCatalogo();
  });
}

inputFiltro.addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(texto) ||
      p.categoria.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
});

// CONTROL DE MODO OSCURO
const modoBtn = document.getElementById("modoBtn");
const html = document.documentElement;

// Detecta el modo del sistema
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  html.classList.add("dark");
  modoBtn.textContent = "☀️";
}

// Cambiar modo manualmente
modoBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  modoBtn.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
});


// Iniciar catálogo al cargar
iniciarCatalogo();

