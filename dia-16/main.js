/*------- CREAR O DECLARAR UN ARRAY O VECTOR O LISTA ------*/

// let frutas = ["banana", "frutillas", "papaya", "chirimoya", "uvas", "palta"];
// console.log(frutas[4]);
// /*---------- METODOS BASICOS DE ARRAYS -------*/
// let cantidadFrutas = frutas.length; //sirve para ver la cantidad de elementos que tiene la lista
// console.log(cantidadFrutas);

// frutas.push("sandia", "higo"); //agrega elementos al final de la lista
// frutas.unshift("naranja", "mandarina"); // sirve para agregar un elemento al inicio
// let frutaEliminada = frutas.pop();//elimina el ultimo elemento de la lista, lo devuelve o retorna
// let frutaEliminadaPrimer = frutas.shift(); //Elimina el primer elemento de la lista y lo devuelve o retorna
// console.log(frutas);
// console.log(frutaEliminada);
// console.log(frutaEliminadaPrimer);

/* --------- REGLA DE ORO --------*/
// //ITERAR CON UN FOR
// // for normal si trabaja con el indice y su posicion
// frutas.push("guayaba");
// for (let index = 0; index < frutas.length; index++) {
//     if("guayaba"===frutas[index]){
//         console.log("la guayaba si esta en la lista");
//     }
// }

// //for of no trabaja el indice o posicion del array, solo el elemento
// for (const fruta of frutas) {
//     console.log(fruta);
//     if ("papaya" === fruta) {
//         console.log("la papaya si esta aqui");
//     }
// }

/* 
    dado un array de notas de un estudiante sacar el 
    promedio del mismo y verificar si esta aprobado o reprobado
    let notas =[90,23,65,0,90]
*/

// let notas = [90, 23, 65, 0, 90];
// let suma  = 0;

// for (let i = 0; i < notas.length; i++) {
// suma = suma + notas [i];

// }

// let promedio = suma / notas.length;

// if (promedio >= 60) {
//     console.log ("Tienes un promedio de: " + promedio + " Aprobado");
// } else {
//     console.log("Tienes un promedio de " + promedio + " Reprobado");
// }


/* dado una lista de edades de la compañia funval let edades = [65, 26,33,20,35,67,78] 
funval quiere saber la cantidad de personas que deben recibir el bono de antiguedad, este bono se da a las personas que tienen mas de 34 años. 
crear una lista de las edades que ingresan al bono. */

// let edades = [65, 26, 33, 20, 35, 67, 78]

// let edadesBono= [];

// for (let i = 0; i < edades.length; i++) {

//     if (edades[i] > 34) {
//         edadesBono.push(edades[i]);
//     }
// }
// console.log ("Edades con derecho al Bono" , edadesBono);
// console.log ("Cantidad de personas con derecho al bono", edadesBono.length);

/* --------- DECLARAR MATRICES ------------ */

// let matrizEstudiantes = [
// ["Boren" , "Alfredo" , "Jaime"],
// ["Mario" , "Jesus", "Luis"],
// ["Jorge", "Diego", "Jose"],

// ];

// // console.log(matrizEstudiantes[2][1]);
// // /* --------------- RECORRER UNA MATRIZ -----------*/

// // for (let i = 0; i < matrizEstudiantes[i].length; j++) {
// //    for (let j = 0; j < matrizEstudiantes[i].length; j++){
// console.log(matrizEstudiantes [i][j]);
// }
// // }

// let mat = [
// [46, 77, 37],
// [32, 99, 3],
// [35, 12, 22]

// ];

// let resultado1 = 0;
// let resultado2 = 0;


// for (let i = 0; i < mat.length; i++) {
//     resultado1 += mat[i][i];
//     resultado2 += mat[i][mat.length - 1 - i];
// }

// console.log("Suma diagonal 1 (resultado1):", resultado1);
// console.log("Suma diagonal 2 (resultado2):", resultado2);
