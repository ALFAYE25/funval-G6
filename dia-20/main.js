// let btn = document.querySelector("#botoncito");

// btn.addEventListener("click", () => {
//    if (btn.classList.contains("bg-green-800")){ 
//     btn.classList.replace("bg-green-800", "bg-red-800");
//     btn.textContent = "Alfredo estuvo aqui";
// } else {
//     btn.classList.replace("bg-red-800", "bg-green-800");
//     btn.textContent ="haz click";
// }
// });

// let boton = document.getElementById ("boton");
// let imagen = document.getElementById ("fiona");
// let mensaje = document.getElementById ("mensaje");

// let esDia = true;

// boton.addEventListener("click", ()=> {
// if (esDia){
//     imagen.src = "https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png";
//     mensaje.textContent = "¡Pos Qué te Pasó Princesa!";
//     boton.textContent = "Pero de noche";
//     document.body.classList.replace("bg-blue-100", "bg-gray-800");
//     mensaje.classList.replace("text-green-800", "text-yellow-300");
// }else{
//     imagen.src = "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png";
//     mensaje.textContent = "La princiesa más hermosa";
//     boton.textContent = "De dia soy una";
//     document.body.classList.replace("bg-gray-800", "bg-blue-100");
//     mensaje.classList.replace("text-yellow-300", "text-green-800");
// }
// esDia = !esDia;
// })


const form = document.getElementById("formCambio");
const resultado = document.getElementById("resultado");


const tasas = {
  peru: { chile: 240, argentina: 90, mexico: 4.7 },
  chile: { peru: 0.0042, argentina: 1.2, mexico: 0.019 },
  argentina: { peru: 0.011, chile: 0.83, mexico: 0.016 },
  mexico: { peru: 0.21, chile: 52, argentina: 63 }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const cantidad = parseFloat(document.getElementById("cantidad").value);

 
  if (!nombre || !origen || !destino || !cantidad) {
    resultado.textContent = "Por favor completa todos los campos.";
    resultado.style.color = "#ffcccc";
    return;
  }

  if (origen === destino) {
    resultado.textContent = "El país de origen y destino deben ser diferentes.";
    resultado.style.color = "#ffd966";
    return;
  }

  
  const tasa = tasas[origen][destino];
  const convertido = cantidad * tasa;

  resultado.style.color = "#b3ffb3";
  resultado.textContent = `Hola ${nombre}, tus ${cantidad.toFixed(2)} de ${origen.toUpperCase()} equivalen a ${convertido.toFixed(2)} en ${destino.toUpperCase()}. `;
});
