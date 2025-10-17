// /* EJEMPLO BASICO */
// let superTitulo = document.querySelector("titulo");
// console.log(superTitulo);
// superTitulo.textContent = "HOLA AMIGOS DE FUNVAL";

// /*-------------- SELECCIONADORES DE ELEMENTOS--------------*/
// let selection1 = document.getElementById("titulo");
// console.log(selection1);
// let selection2 = document.getElementsByClassName("titu");
// let selection3 = document.getElementsByTagName("h1");
// let selection4 = document.querySelector("#titulo");
// let selection5 = document.querySelectorAll(".titu");

// console.log(selection2);
// console.log(selection3);
// console.log(selection4);
// console.log(selection5);

let estudiantesFunval = [
  { nombre: "Alfredo", pais: "Mexico", edad: 28 },
  { nombre: "Belen", pais: "Bolivia", edad: 28 },
  { nombre: "Boren", pais: "Colombia", edad: 28 },
  { nombre: "David", pais: "Chile", edad: 28 },
  { nombre: "Ibraim", pais: "Mexico", edad: 28 },
  { nombre: "Moises", pais: "Bolivia", edad: 28 },
];

let contenedor = document.getElementById("contenedor-tabla");

let tabla = "<table border='1'>"
tabla += "<tr><th>Nombre</th><th>Edad</th><th>País</th></tr>";

for (let i = 0; i < estudiantesFunval.length; i++) {
    tabla +="<tr>" +
    "<td>" + estudiantesFunval[i].nombre + "</td>" +
    "<td>" + estudiantesFunval[i].edad + "</td>" +
    "<td>" + estudiantesFunval[i].pais + "</td>" +
  "</tr>";
}

tabla += "</table>";

contenedor.innerHTML = tabla;