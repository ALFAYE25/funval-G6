console.log("esta funcionando");
/* ----- if ----*/

/*let mes = 10;
if (mes == 1) {
console.log("enero");

} else if (mes == 2) {
    console.log("febrero");
} else if (mes == 3) {
    console.log("marzo");
} else if (mes == 4) {
    console.log("abril");
} else if (mes == 5) {
    console.log("mayo");
} else if (mes == 6) {
    console.log ("junio")
} else if (mes == 7) {
    console.log("julio");
} else if (mes == 8) {
    console.log("agosto");
} else if (mes == 9) {
    console.log("septiembre");
} else if (mes == 10) {
    console.log("octubre");
} else if (mes == 11){
    console.log("noviembre");

} else if (mes == 12) {
    console.log("diciembre");
} else {
    console.log("Número inválido. Debes usar un número del 1 al 12")
}


/* swich case  */

/*let mesesillo = parseInt(prompt("Ingresa el mes de nacimiento"));

/*switch (mesesillo) {
    case 1:
        console.log ("enero");
        break;
        case 2:
        console.log ("febrero");
        break;
        case 3:
        console.log ("marzo");
        break;
        case 4:
        console.log ("abril");
        break;
        case 5:
        console.log ("mayo");
        break;
        case 6:
        console.log ("junio");
        break;
        case 7:
        console.log ("julio");
        break;
        case 8:
        console.log ("agosto");
        break;
        case 9:
        console.log ("septiembre");
        break;
        case 10:
        console.log ("octubre");
        break;
        case 11:
        console.log ("noviembre");
        break;
        case 12:
        console.log ("diciembre");
        break;
}


/* ----------------------------------------------------------------------- */
// =======================================================
// IF SIMPLE (EJERCICIOS 1 - 5)
// =======================================================

/*
1. Pide al usuario un número con prompt.
   Muestra "Positivo" si el número es mayor que 0.
*/
// // RESPUESTA AQUÍ 👇
// let numero = parseInt(prompt("Ingresa numero:"));
// if (numero > 0){
//     console.log("Positivo");
// }
// /*
// 2. Pide la edad del usuario.
//    Si la edad es mayor o igual a 18, muestra "Eres mayor de edad".
// */
// // RESPUESTA AQUÍ 👇
// let edad = parseInt(prompt("Ingresa tu edad:"));
// if (edad >=  18){
//     console.log("Eres mayor de edad");
// }
// /*
// 3. Pide un número y verifica si es par.
//    Usa el operador % y un if.
// */
// // RESPUESTA AQUÍ 👇
// let num = parseInt(prompt("Ingresa un número:"));
// if (num % 2 === 0) {
//     console.log("El número es par");
// }

// /*
// 4. Pide una contraseña con prompt.
//    Si la contraseña es "admin123", muestra "Acceso permitido".
// */
// // RESPUESTA AQUÍ 👇
// let pass = prompt ("Ingresa la contraseña");
// if (pass === "admin123") {
//     console.log ("acceso permitido");
// }
// /*
// 5. Pide un número.
//    Si el número es igual a 100, muestra "Número exacto".
// */
// // RESPUESTA AQUÍ 👇
// let numero1 = parseInt(prompt("Ingresa un numero"));
// if (numero1 === 100) {
//     console.log("Número exacto");
// }
// // =======================================================
// // IF - ELSE (EJERCICIOS 6 - 10)
// // =======================================================

// /*
// 6. Pide un número.
//    Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".
// */
// // RESPUESTA AQUÍ 👇
// let number = parseInt(prompt("Ingresa un numero"));
// if (num > 50) {
//     console.log ("Número alto");

// } else {
//     console.log("Número bajo");
// }
// /*
// 7. Pide la edad del usuario.
//    Si es mayor o igual a 18 muestra "Bienvenido",
//    caso contrario "Acceso denegado".
// */
// // RESPUESTA AQUÍ 👇
// let edad2 = parseInt(prompt("¿Cuál es tu edad?"));
// if (edad2 >= 18) {
//     console.log ("Bienvenido");
// } else {
//     console.log ("Acceso denegado");
// }
// /*
// 8. Pide una nota entre 0 y 100.
//    Si la nota es mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".
// */
// // RESPUESTA AQUÍ 👇
// let nota = parseInt(prompt("Ingresa tu nota (0-100):"));
// if (nota >= 60) {
//     console.log("Aprobado");
// } else {
//     console.log ("Reprobado");
// }
// /*
// 9. Pide un nombre.
//    Si el nombre es "Kevin" muestra "Hola Kevin",
//    de lo contrario "Hola invitado".
// */
// // RESPUESTA AQUÍ 👇
// let nombre =prompt ("Ingresa tu nombre");
// if (nombre === "Kevin") {
// console.log("Hola Kevin");
// }else {
//     console.log("Hola invitado");
// }
// /*
// 10. Pide un número y muestra si es par o impar usando if-else.
// */
// // RESPUESTA AQUÍ 👇
// let numero3 = parseInt(prompt("Ingresa un número"));
// if (numero3 % 2 === 0){
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }
// // =======================================================
// // IF - ELSE IF (EJERCICIOS 11 - 15)
// // =======================================================

// /*
// 11. Pide una nota (0 a 100) e imprime:
//    - "Excelente" si es mayor o igual a 90
//    - "Bueno" si está entre 70 y 89
//    - "Regular" si está entre 50 y 69
//    - "Insuficiente" si es menor a 50
// */
// // RESPUESTA AQUÍ 👇
// let nota1 = parseInt(prompt("Ingresa tu nota (0-100):"));
// if (nota1 >= 90) {
//     console.log("Excelente");
// } else if (nota1 >= 70){
//     console.log("Bueno");
// } else if (nota1 >= 50) {
//     console.log("Regular");
// } else {
//     console.log("Insifuciente");
// }
// /*
// 12. Pide la temperatura (en grados Celsius).
//    Muestra:
//    - "Frío" si es menor a 15
//    - "Templado" si está entre 15 y 25
//    - "Caluroso" si es mayor a 25
// */
// // RESPUESTA AQUÍ 👇
// let temp = parseFloat(prompt("Ingresa la temperatura (°C):"));
// if (temp < 15) {
//     console.log("Frío");
// }else if (temp <= 25){
//     console.log("Templado");
// } else {
//     console.log("Caluroso");
// }
// /*
// 13. Pide una hora (0 a 23).
//    Muestra:
//    - "Buenos días" si está entre 6 y 11
//    - "Buenas tardes" si está entre 12 y 18
//    - "Buenas noches" si está entre 19 y 23
//    - "Durmiendo" si está entre 0 y 5
// */
// // RESPUESTA AQUÍ 👇
// let hora = parseInt(prompt("Ingresa la hora (0-23:"));
// if (hora >= 6 && hora <= 11) {
//     console.log("Buenos días");
// } else if (hora >= 12 && hora <= 18) {
//     console.log("Buenas tardes");
// } else if (hora >= 19 && hora <= 23) {
//     console.log("Buenas noches");
// } else {
//     console.log("Durmiendo")
// }
// /*
// 14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno.
// */
// // RESPUESTA AQUÍ 👇
// let opcion = parseInt(prompt("Ingresa un número del 1 al 3"));
// if (opcion === 1) {
//     console.log("Elegiste la opción 1");
// }else if (opcion === 2) {
//     console.log("Elegiste la opción 2");
// }
// /*
// 15. Pide un número y muestra:
//    - "Negativo" si es menor que 0
//    - "Cero" si es igual a 0
//    - "Positivo" si es mayor que 0
// */
// // RESPUESTA AQUÍ 👇
// let numero2 = parseInt(prompt("Ingresa un número:"));
// if (numero2 < 0) {
//     console.log("Negativo");
// } else if (numero2 === 0) {
//     console.log("Cero");
// } else {
//     console.log("Positivo");
// }


// // =======================================================
// // IF ANIDADO (EJERCICIOS 16 - 20)
// // =======================================================

// /*
// 16. Pide una edad.
//    Si es mayor o igual a 18 muestra "Mayor de edad".
//    Dentro del mismo if, si es mayor o igual a 60 muestra "Adulto mayor".
// */
// // RESPUESTA AQUÍ 👇
// let edad3 = parseInt(prompt("Ingresa tu edad:"));
// if (edad3 >= 18) {
//     console.log("Mayor de edad");
//     if (edad3 >= 60) {
//         console.log("Adulto Mayor");
//     }
// }
// /*
// 17. Pide una nota.
//    Si es mayor o igual a 60 muestra "Aprobado".
//    Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".
// */
// // RESPUESTA AQUÍ 👇
// let nota2 = parseInt(prompt("Ingresa tu nota (0-100):"));
// if (nota2 >= 60) {
//     console.log("Aprobado");
//     if (nota2 >= 90) {
//         console.log("excelente");
//     }
// }
// /*
// 18. Pide un número.
//    Si es positivo, dentro del if verifica si es par o impar.
// */
// // RESPUESTA AQUÍ 👇
// let numero4 = parseInt(prompt("Ingresa un número:"));
// if (numero4 > 0) {
//     console.log("El número es positivo");
//     if (numero4 % 2 === 0) {
//         console.log("Y además es par");
//     } else {
//         console.log("Y además es impar");
//     }
// }
// /*
// 19. Pide usuario y contraseña.
//    Si usuario es "admin", dentro del mismo if verifica si la contraseña es "1234".
//    Si ambos coinciden, muestra "Acceso concedido".
// */
// // RESPUESTA AQUÍ 👇
// let usuario = prompt("Ingresa tu usuario:");
// if (usuario === "admin") {
//     let pass = prompt("Ingresa la contraseña:");
//     if (pass === "1234") {
//         console.log("Acceso concedido");
//     }
// }
// /*
// 20. Pide dos números.
//    Si el primero es mayor, muestra "El primero es mayor".
//    Dentro de ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".
// */
// // RESPUESTA AQUÍ 👇
// let n1 = parseInt(prompt("Ingresa el primer número:"));
// let n2 = parseInt(prompt("Ingresa el segundo número:"));
// if (n1 > n2) {
//     console.log("El primero es mayor");
//     if (n- - n2 > 10) {
//         console.log("Diferencia grande");
//     }
// }
// // =======================================================
// // SWITCH CASE (EJERCICIOS 21 - 22)
// // =======================================================

// /*
// 21. Pide un número del 1 al 7 y muestra el día correspondiente.
//    1 = Lunes, 2 = Martes, ..., 7 = Domingo
// */
// // RESPUESTA AQUÍ 👇
// let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
// switch (dia) {
//     case 1: console.log("Lunes"); break;
//     case 2: console.log("Martes"); break;
//     case 3: console.log("Miércoles"); break;
//     case 4: console.log("Jueves"); break;
//     case 5: console.log("Viernes"); break;
//     case 6: console.log("Sábado"); break;
//     case 7: console.log("Domingo"); break;
//     default: console.log("Número inválido");
// }
// /*
// 22. Pide un número del 1 al 12 y muestra el mes correspondiente.
// */
// // RESPUESTA AQUÍ 👇
// let mes = parseInt(prompt("Ingresa un número del 1 al 12:"));
// switch (mes) {
//     case 1: console.log("Enero"); break;
//     case 2: console.log("Febrero"); break;
//     case 3: console.log("Marzo"); break;
//     case 4: console.log("Abril"); break;
//     case 5: console.log("Mayo"); break;
//     case 6: console.log("Junio"); break;
//     case 7: console.log("Julio"); break;
//     case 8: console.log("Agosto"); break;
//     case 9: console.log("Septiembre"); break;
//     case 10: console.log("Octubre"); break;
//     case 11: console.log("Noviembre"); break;
//     case 12: console.log("Diciembre"); break;
//     default: console.log("Número inválido");



// }
// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 23 - 35)
// =======================================================

/*
23. Pide dos números.
   Usa if-else para mostrar si su suma es par o impar.
*/
// RESPUESTA AQUÍ 👇

/*
24. Pide tres notas, calcula el promedio.
   Usa if-else-if para mostrar:
   - "Excelente" si es mayor a 90
   - "Aprobado" si es mayor o igual a 60
   - "Reprobado" si es menor a 60
*/
// RESPUESTA AQUÍ 👇

/*
25. Pide nombre y edad.
   Usa un if anidado para mostrar:
   - "Hola [nombre], eres mayor de edad"
   - Si tiene 60 o más, agrega también "y adulto mayor"
*/
// RESPUESTA AQUÍ 👇

/*
26. Pide un número del 1 al 5 y usa switch para mostrar una calificación:
   1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.
*/
// RESPUESTA AQUÍ 👇

/*
27. Pide una letra y determina si es vocal o consonante usando switch.
*/
// RESPUESTA AQUÍ 👇

/*
28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
   Usa switch para realizar la operación correspondiente.
*/
// RESPUESTA AQUÍ 👇

/*
29. Pide edad y país.
   Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
   Caso contrario, muestra "No puede votar".
*/
// RESPUESTA AQUÍ 👇

/*
30. Pide tres números.
   Determina cuál es el mayor de los tres usando if-else-if.
*/
// RESPUESTA AQUÍ 👇

/*
31. Pide un número y determina:
   - Si es múltiplo de 3 muestra "Fizz"
   - Si es múltiplo de 5 muestra "Buzz"
   - Si es múltiplo de ambos muestra "FizzBuzz"
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide una nota (0 a 100) y muestra:
   "A" si es >= 90
   "B" si es >= 80
   "C" si es >= 70
   "D" si es >= 60
   "F" si es menor de 60
*/
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide la cantidad de artículos comprados y el precio por unidad.
   Si compró más de 10 artículos, aplica 10% de descuento.
   Muestra el total a pagar.
*/
// RESPUESTA AQUÍ 👇

/*
35. Ejercicio Final:
   Pide nombre, edad y tres notas.
   Calcula el promedio, determina si aprueba y muestra:
   "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
   Usa if-else-if o anidado.
*/
// RESPUESTA AQUÍ 👇
// let nomb = prompt("Ingresa tu nombre:");
// let edad4= parseInt(prompt("Ingresa tu edad:"));

// let note1 = parseFloat(prompt("Ingresa la primera nota:"));
// let note2 = parseFloat(prompt("Ingresa la segunda nota:"));
// let note3 = parseFloat(prompt("Ingresa la tercera nota:"));

// let promedio = (note1 + note2 + note3) / 3;

// let resultado;

// if (promedio >= 60) {
//     resultado = "Aprobado";
// } else {
//     resultado = "Reprobado";
// }

// console.log("Hola " + nomb + ", tienes " + edad4 + " años y tu promedio es " + ". " + resultado + ".");



// =======================================================
// EJERCICIOS PRACTICA 5
// =======================================================


// Ejercicio 1 – Calculadora de Promedio y Rendimiento
// Pide al usuario cuatro notas (del 0 al 100).
// Calcula el promedio y muestra un mensaje según el resultado:

// “Excelente” si el promedio es mayor o igual a 90

// “Bueno” si es mayor o igual a 75

// “Regular” si es mayor o igual a 60

// “Insuficiente” en caso contrario

// Instrucciones:
// Usa if-else-if y operadores lógicos para determinar el mensaje.
// Muestra el resultado con console.log() o alert().

// RESPUESTA AQUÍ 👇

let nota1 = parseInt(prompt("Ingresa la primera nota (0-100):"));
let nota2 = parseInt(prompt("Ingresa la segunda nota (0-100):"));
let nota3 = parseInt(prompt("Ingresa la tercera nota (0-100):"));
let nota4 = parseInt(prompt("Ingresa la cuarta nota (0-100):"));


let promedio = (nota1 + nota2 + nota3 + nota4) / 4;


if (promedio >= 90) {
  alert("Promedio: " + promedio + " - Excelente");
} else if (promedio >= 75) {
  alert("Promedio: " + promedio + " - Bueno");
} else if (promedio >= 60) {
  alert("Promedio: " + promedio + " - Regular");
} else {
  alert("Promedio: " + promedio + " - Insuficiente");
}




// Ejercicio 2 – Calculadora de Tarifa de Transporte
// El programa debe pedir al usuario:

// Su edad

// Si es estudiante (“sí” o “no”)

// La distancia que recorrerá (en kilómetros)

// Reglas del costo:

// Menores de 18 pagan 50% del precio base

// Estudiantes pagan 75% del precio base

// Mayores de 60 pagan 40% del precio base

// Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

// Instrucciones:
// Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.

// RESPUESTA AQUÍ 👇

let precioBase = 100;
let edad = parseInt(prompt("Ingresa tu edad:"));
let estudiante = prompt("¿Eres estudiante? (sí/no)");
let distancia = parseInt(prompt("¿Cuántos kilómetros vas a recorrer?"));

let total = precioBase;

if (edad < 18) {
  total = total * 0.5; // 50%
} else if (edad >= 60) {
  total = total * 0.4; // 40%
} else if (estudiante == "sí") {
  total = total * 0.75; // 75%
}

if (distancia > 30) {
  total = total * 1.1; // +10%
}

console.log("El costo total del viaje es: $" + total);




// Ejercicio 3 – Menú de Conversión de Unidades
// Muestra un menú con 4 opciones:

// Convertir de Celsius a Fahrenheit

// Convertir de Fahrenheit a Celsius

// Convertir de Metros a Kilómetros

// Convertir de Kilómetros a Metros

// El usuario debe elegir una opción y escribir el valor a convertir.
// El programa mostrará el resultado correspondiente.

// Instrucciones:
// Usa switch-case para realizar las conversiones y prompt() para las entradas.

// RESPUESTA AQUÍ 👇

let opcion = parseInt(prompt(
  "Menú de Conversión:\n" +
  "1. Celsius a Fahrenheit\n" +
  "2. Fahrenheit a Celsius\n" +
  "3. Metros a Kilómetros\n" +
  "4. Kilómetros a Metros\n" +
  "Elige una opción (1-4):"
));

let valor;
let resultado;

switch (opcion) {
  case 1:
    valor = parseInt(prompt("Ingresa los grados Celsius:"));
    resultado = (valor * 9/5) + 32;
    console.log(valor + "°C = " + resultado + "°F"); break;

  case 2:
    valor = parseInt(prompt("Ingresa los grados Fahrenheit:"));
    resultado = (valor - 32) * 5/9;
    console.log(valor + "°F = " + resultado + "°C"); break;

  case 3:
    valor = parseInt(prompt("Ingresa los metros:"));
    resultado = valor / 1000;
    console.log(valor + " metros = " + resultado + " kilómetros"); break;

  case 4:
    valor = parseInt(prompt("Ingresa los kilómetros:"));
    resultado = valor * 1000;
    console.log(valor + " kilómetros = " + resultado + " metros"); break;

  default: console.log("Opción no válida");
}






// Ejercicio 4 – Sistema de Descuentos en una Tienda
// El usuario debe ingresar:

// El precio total de su compra

// Si tiene tarjeta de cliente frecuente (“sí” o “no”)

// Reglas:

// Si el total es mayor a 500, aplica un 10% de descuento

// Si además tiene tarjeta, aplica un 5% adicional

// Si el total es menor o igual a 100, aplica un recargo del 5%

// El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

// Instrucciones:
// Utiliza operadores de asignación y condiciones anidadas para determinar el total.

// RESPUESTA AQUÍ 👇

let suma =parseInt(prompt("Ingresa el precio total de tu compra:"));
let tarjeta = prompt("¿Tienes tarjeta de cliente frecuente? (sí/no)");
let mensaje = "";

if (suma > 500) { 
  suma = suma * 0.9; // 10% de descuento
  mensaje = "Se aplicó un 10% de descuento.";
  if (tarjeta == "sí") {
    suma = suma * 0.95; // 5% adicional
    mensaje = "Se aplicó un 15% de descuento (10% + 5% adicional por tarjeta).";
  }
} else if (suma <= 100) {
  suma = suma * 1.05; // recargo del 5%
  mensaje = "Se aplicó un recargo del 5%.";
} else {
  mensaje = "No se aplicó descuento.";
}

console.log(mensaje);
console.log("Total a pagar: $" + total);






// Ejercicio 5 – Calculadora de Edad y Etapa de Vida
// Pide al usuario:

// Su año de nacimiento

// El año actual

// Calcula su edad y muestra un mensaje según el rango:

// Menor de edad: menos de 18 años

// Adulto joven: entre 18 y 30 años

// Adulto: entre 31 y 59 años

// Adulto mayor: 60 años o más

// BONUS:
// Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.


// RESPUESTA AQUÍ 👇


let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
let actual = parseInt(prompt("Ingresa el año actual:"));
let cumplio = prompt("¿Ya cumpliste años este año? (sí/no)");

let edad1 = actual - nacimiento;

if (cumplio == "no") {
    edad1 = edad1 -1;
 
}

if (edad1 < 18) {
    console.log("Tienes " + edad1 + " años. Eres menor de edad.");

}else if (edad1 >= 18 && edad1 <= 30) {
    console.log("Tienes " + edad1+ " años. Eres adulto joven.");
} else if (edad1 >= 31 && edad <= 59) {
    console.log("Tienes " + edad1 + " años. Eres un adulto.");
} else {
    console.log("Tienes " + edad1 + " años. Eres un adulto mayor.");
}


