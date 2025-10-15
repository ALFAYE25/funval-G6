/* ---------------------EJERCICIOS----------------------------------- */
// // 1. Crea un array con 5 nombres y muestra el primero y el último elemento en consola.
// let nombres = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
// console.log(nombres[0]);
// console.log(nombres[nombres.length - 1]);

// // 2. Agrega un elemento al final del array usando push y muestra el nuevo array.
// let frutas = ["manzana", "pera", "uva"];

// frutas.push("mango");
// console.log("Nuevo array de frutas:", frutas);

// // 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
// let ultimo = nombres.pop()
// console.log(ultimo);
// console.log(nombres);


// // 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.
// let frutas1 = ["manzana", "pera", "uva"];
// frutas1.unshift("fresa");
// console.log("Nuevo array de frutas:", frutas1);


// // // 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
// // let primero = names.shift();
// // console.log(primero);

// // 6. Crea un array de números y muestra cuántos elementos tiene con length.
// let numeros = [10, 20, 30, 40, 50, 80];
// console.log("El array tiene", numeros.length, "elementos.");



// // 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
// let canastaFrutas = ["naranja", "banana", "sandia"];
// for (let i = 0; i < canastaFrutas.length; i++) {

// }

// // 8. Recorre un array de números con for of y muestra el doble de cada número.
// let numbers = [10, 20, 30, 40, 50, 60];
// for (let num of numbers) {
//     console.log("El doble de", num, "es", num * 2);
// }



// // 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.
// let colores = ["rojo", "azul", "verde", "morado", "amarillo"];
// for (let j = 0; j <colores.length; j++) {
//     console.log("el indice es:" + j + "y el valor que tiene es:" + colores[j]);
// }


// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.

// let animalesBase = ["Perro", "Gato", "Tortuga", "Conejo", "Perico"];
// let animales = [];

// for (let i = 0; i < animalesBase.length; i++) {
//   animales.push(animalesBase[i]);
// }

// console.log("Lista de animales:", animales);

// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.
// let numeritos


// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.

// let words = ["mouse", "computadora", "funval", "cable", "smartv", "teclado"];

// let contador = 0;

// for (let word of words) {
//      if (word.length > 4) {
//         contador++;
//      }
//  }
//  console.log("Cantidad de palaras con más de 4 letras:", contador);




// // 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.
// nombres = ["Kevin", "Mario", "Hugo", "Hernan", "Ramiro"];
// let pepe = false;
// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i] === "kevin") {
//         pepe = true;
//     }
// }
// if (pepe)




// 14. Crea un array con edades y muestra solo las edades mayores a 18.

// let años = [12, 25, 17, 30, 15, 22, 18, 40];

// for (let i = 0; i < años.length; i++) {
//     if (años[i] > 18) {
//         console.log(años[i]);
//     }
// }

// 15. Crea un array de números y crea un nuevo array con el triple de cada número.
// 16. Crea un array de precios y calcula el total sumando todos sus elementos.
// 17. Crea un array de 10 números y cuenta cuántos son pares.
let arrayNum = [180, 200, 300, 950, 500, 20, 30, 65, 88, 90]
let contNum = 0, contimp = 0;


for (let i = 0; i < arrayNum.length; i++) {
    if(arrayNum[i]%2==0){
        contNum++
    }else {
        contimp++;
    }
}
console.log(`Existen ${contNum} Números pares
    Existen ${contimp} Números impares`); 


// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.

let nomb = ["Alfredo", "Carlos", "Cesar", "Alberto", "Itzeel"];
let nuevoNom = prompt("Ingresa nuevo nombre: ").toLocaleLowerCase();
let existe = false;

console.log(nomb);

for (let i = 0; i < nomb.length; i++) {
    if (nomb[i].toLocaleLowerCase() == nuevoNom){
        existe = true;
    }
}

if (existe) {
    console.log("Ya existe el nombre");
}else {
    nomb.push(nuevoNom);
    console.log(nomb);
}
// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).
// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.
// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.
// 23. Crea un array con 5 números y crea otro array con los números invertidos.
// 24. Crea un array de 5 números y calcula el promedio.
// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.
// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).
// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.


// // 4. Crea un array con números y elimina los números repetidos dejando solo uno de cada valor (sin usar Set).
// let cantidad = [2, 5 , 3, 2, 8, 5, 9, 10, 3, 8];

// let noRepetidos = [];

// for (let i = 0; i < cantidad.length; i++) {
//     let repetido = false;

// for (let j = 0; j < noRepetidos.length; j++) {
//     if (cantidad[i] === noRepetidos [j]) {
//         repetido = true;
//         break;
//     }
// }
// if (!repetido) {
//     noRepetidos.push(cantidad[i]);

// }



// }
// console.log ("No repetidos:", noRepetidos);
