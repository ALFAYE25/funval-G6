/* funciones de orden superior */
// function saludar(nombre) {
//     console.log("hola amigo: " +nombre);

// }
// function despedir(nombre) {
//     console.log("Chao amigo " + nombre);

// } 
// function contratar(nombre) {
//     console.log("Estas contratado: " + nombre);
// }

// //declaramos
// function superSuperior(callback1, callback2, nombre) {
//     callback1(nombre);
//     callback2(nombre);
// }
// //utilizamos
// // funcion que recibe un funcion1 funcion2 y un string
// superiorSuperior(saludar, despedir, "Boren");
// superiorSuperior(saludar, contratar, "Ibrain");

// /*-------------------------------------*/
// function superior1(callback0, nombre) {
//     callback0(nombre);
// }

// superior1(function (nombre) {
//     console.log("Estoy aquí dentro " + nombre);
//    }, "David");

//    /*---------------------------------CREACION DE FUNCION DE ORDEN SUPERIOR--------------------------*/
//    function recorrido (array, callback){
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
//    }

//    let notas = [32, 77, 60, 40, 90, 90]
//    let frutas = ["pera", "mango", "naranja", "kiwi"];

//    recorrido(notas,(nota)=>{
//     if (nota >= 51){
//         console.log(nota);
//     }
//    });

//    recorrido(frutas, (fruta) => {
//     if (fruta === "kiwi") {
//         console.log("El kiwi está aquí");
//     }
//    });

//    /* ----------------------------- FOR EACH --------------------*/
//    let estudiante=["Alfredo", "Belen", "Boren", "David"];

//    function motrar(item) {
//     console.log(item);
//    }

//    estudiante.forEach(mostrar);
//    estudiante.forEach((estudianteItem) => {
//     console.log(estudianteItem);
//    });

//  EJERCICIO 2: Sumar números
// Dado un array de números, usa forEach para sumar todos los valores y mostrar el resultado final en consola.
/*let numeros = [5, 10, 15, 20];*/
// Tu código aquí 👇
// numeros.forEach( ... )

// let numeros = [5, 10, 15, 20];
// let suma = 0;

// numeros.forEach(function(numero) {
//     suma + numero;
// });

// console.log("La suma total es: " + suma);

// //  EJERCICIO 3: Mostrar índice y valor
// // Dado un array de frutas, usa forEach para mostrar en consola:
// // "En la posición X está la fruta Y"
// //let frutitas = ["Manzana", "Banana", "Pera", "Sandía"];
// // Tu código aquí 👇
// // frutas.forEach( ... )

// let frutitas = ["Manzana", "Banana", "Pera", "Sandía"];

// frutitas.forEach(function(fruta, indice){
//     console.log(`En la posicion ${indice} está la fruta ${fruta}`);
//});


/*------------------- MAP -------------------------*/

let notasFunval = [35, 78, 22, 51, 67, 34, 98, 71];

let arrayNuevo = notasFunval.map((nota) => nota * 2);
console.log(arrayNuevo);


let estudiantesFunval = [
  "DAVID",
  "BOREN",
  "JOSE PELICO",
  "MOISES",
  "BELEN",
  "BOREN",
  "EDMUND",
  "JOSE PELICO",
  "JOSE PELICO",
  "ALFREDO",
];
/* 
    utilizar map para q en los lugares donde Jose Pelico puso su nombre
    puedan cambiarlo x estudiante no registrado
*/

let listaCorrecta = estudiantesFunval.map(function(nombre){
if (nombre === "JOSE PELICO"){
    return "estudiante no registrado";

}   else {
    return nombre;
} 
});
console.log(listaCorrecta);


/*---------------------- FILTER -----------------*/

notasFunval = [35, 78, 22, 51, 67, 34, 98, 71];

let notasResultado = notasFunval.filter((nota) => nota % 2 === 0);

console.log(notasResultado);


let marcas = [
  "toyota",
  "samsung",
  "lg",
  "sony",
  "paramount",
  "adidas",
  "nike",
  "funval",
];
/* 
    crear una lista nueva con las marcas q tengan mas de 4 letras 
*/

let marcasFiltradas = marcas.filter(function(marca){
    return marca.length > 4;
});
console.log(marcasFiltradas);

/*----------------------- FIND ----------------------*/
let controllers = ["JOSE", "DIEGO", "JUAN", "MARIO", "MARCOS"];

let encontrado = controllers.find((controllers) => controllers === "JOSE"); 
console.log(encontrado);

/*--------------------- findIndex ----------------------*/
let indice = controllers.findIndex((controller) => controller === "BOREN");
console.log(indice);

/*---------------------- SOME ----------------------*/

let aquita = controllers.some((con) => con === "DAVID");
console.log(aquita);


/*--------------------- UNIENDO METODOS -----------------*/

let edades = [35, 78, 22, 18, 55, 52, 33, 37, 41]
let arrayResultado = edades.map((edad) => edad*3)
.filter((edadItem) => edadItem % 2 === 0)
.some((item) => item === 66);
console.log(arrayResultado);
