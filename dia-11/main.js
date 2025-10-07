// /*Para mostrar en consola un mensaje*/
 console.log("Hola Funval dia 11");

// /* siete variables con diferentes tipos de datos primitivos */
// let nombre = "Alfredo"; // String
// let edad = 42; // Number
// let esEstudiante = true; // Boolean
// let altura; // Undefined
// let nulo = null; // Null
// let simbolo = Symbol("simbolo"); // Symbol
// let bignumero = 9007199254740991n; // BigInt

// /* verificar el tipo de dato de cada variable */
// console.log(typeof nombre); // String
// console.log(typeof edad); // Number
// console.log(typeof esEstudiante); // Boolean
// console.log(typeof altura); // Undefined
// console.log(typeof nulo); // Object (esto es un comportamiento especial de JavaScript)
// console.log(typeof simbolo); // Symbol
// console.log(typeof bignumero); // BigInt

// /* Cambiar el valor de tres variables a otros tipos de datos */
// nombre = 100; // Ahora es Number
// edad = "Cuarenta y dos"; // Ahora es String
// esEstudiante = null; // Ahora es Null

// /* verificar nuevamente el tipo de dato de las variables modificadas */
// console.log(typeof nombre); // Number
// console.log(typeof edad); // String
// console.log(typeof esEstudiante); // Object (null sigue siendo Object)

// /* operadores aritméticos */
// let a = 10;
// let b = 3;

// console.log("Suma: " + (a + b)); // Suma
// console.log("Resta: " + (a - b)); // Resta
// console.log("Multiplicación: " + (a * b)); // Multiplicación
// console.log("División: " + (a / b)); // División
// console.log("Módulo: " + (a % b)); // Módulo
// console.log("Exponente: " + (a ** b)); // Exponente (10^3)

// /* operadores de comparación */
// console.log("a es igual a b: " + (a == b)); // Igualdad
// console.log("a es estrictamente igual a b: " + (a === b)); // Igualdad estricta
// console.log("a es diferente de b: " + (a != b)); // Desigualdad
// console.log("a es estrictamente diferente de b: " + (a !== b)); // Desigualdad estricta
// console.log("a es mayor que b: " + (a > b)); // Mayor que
// console.log("a es menor que b: " + (a < b)); // Menor que
// console.log("a es mayor o igual que b: " + (a >= b)); // Mayor o igual que
// console.log("a es menor o igual que b: " + (a <= b)); // Menor o igual que


// /* operadores lógicos */
// let verdadero = true;
// let falso = false;

// console.log("verdadero AND falso: " + (verdadero && falso)); // AND
// console.log("verdadero OR falso: " + (verdadero || falso)); // OR
// console.log("NOT verdadero: " + (!verdadero)); // NOT
// console.log("NOT falso: " + (!falso)); // NOT   


// /* operadores de asignación */
// let c = 5;
// console.log("Valor inicial de c: " + c); // 5

// c += 3; // c = c + 3
// console.log("Después de c += 3: " + c); // 8 
// c -= 2; // c = c - 2
// console.log("Después de c -= 2: " + c); // 6
// c *= 4; // c = c * 4
// console.log("Después de c *= 4: " + c); // 24   
// c /= 6; // c = c / 6
// console.log("Después de c /= 6: " + c); // 4
// c %= 3; // c = c % 3
// console.log("Después de c %= 3: " + c); // 1
// c **= 2; // c = c ** 2
// console.log("Después de c **= 2: " + c); // 1   


// /* operador ternario */
// let edadPersona = 20;
// let esMayorDeEdad = (edadPersona >= 18) ? "Sí, es mayor de edad." : "No, es menor de edad.";
// console.log("¿La persona es mayor de edad? " + esMayorDeEdad); // Sí, es mayor de edad. 




/* 1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.
*/
// RESPUESTA AQUÍ 👇
let a = 8;
let b = 4;  
console.log("Suma: " + (a + b)); // Suma
console.log("Resta: " + (a - b)); // Resta
console.log("Multiplicación: " + (a * b)); // Multiplicación
console.log("División: " + (a / b)); // División

/* 2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

let base = 5;
let altura = 10;
let areaRectangulo = base * altura;
console.log("Área del rectángulo: " + areaRectangulo); // Área del rectángulo: 50   


/*3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

let baseTriangulo = 6;
let alturaTriangulo = 8;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Área del triángulo: " + areaTriangulo); // Área del triángulo: 24 


/*4. Calcula el módulo (resto) de dividir 25 entre 4.
   Usa el operador %.
*/
// RESPUESTA AQUÍ 👇

let dividendo = 25;
let divisor = 4;
let modulo = dividendo % divisor;
console.log("El módulo de 25 entre 4 es: " + modulo); // El módulo de 25 entre 4 es: 1

/*5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.

*/
// RESPUESTA AQUÍ 👇
let numero = 3;
let cuadrado = numero ** 2;
let cubo = numero ** 3;
console.log("El cuadrado de " + numero + " es: " + cuadrado); // El cuadrado de 3 es: 9
console.log("El cubo de " + numero + " es: " + cubo); // El cubo de 3 es: 27



/*6. Calcula el perímetro de un cuadrado con lado = 5.
   Fórmula: lado * 4
*/
// RESPUESTA AQUÍ 👇
let lado = 5;
let perimetroCuadrado = lado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado); // El perímetro del cuadrado es: 20 


/*7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.
*/
// RESPUESTA AQUÍ 👇
let num1 = 7;
let num2 = 5;
let suma = num1 + num2;
let esPar = (suma % 2 === 0) ? "par" : "impar";
console.log("La suma de " + num1 + " y " + num2 + " es " + suma + ", que es un número " + esPar); // La suma de 7 y 5 es 12, que es un número par


/*8. Calcula el promedio de tres notas y muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇

let nota1 = 85;
let nota2 = 90;
let nota3 = 78;
let promedio = (nota1 + nota2 + nota3) / 3;
console.log("El promedio de las notas es: " + promedio); // El promedio de las notas es: 84.33333333333333



// =======================================================
// OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// =======================================================

/*9. Declara una variable x = 10.
   Usa x += 5 y muestra el nuevo valor.
*/
// RESPUESTA AQUÍ 👇
let x = 10;
x += 5;
console.log("El nuevo valor de x es: " + x); // El nuevo valor de x es: 15


/*10. Declara una variable puntos = 100.
    Resta 20 puntos usando puntos -= 20 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇

let puntos = 100;
puntos -= 20;
console.log("El nuevo valor de puntos es: " + puntos); // El nuevo valor de puntos es: 80


/*11. Declara precio = 50.
    Duplica su valor usando precio *= 2 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇

let precio = 50;
precio *= 2;
console.log("El nuevo valor de precio es: " + precio); // El nuevo valor de precio es: 100



/*12. Declara saldo = 200.
    Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

let saldo = 200;
saldo /= 4;
console.log("El nuevo saldo es: " + saldo); // El nuevo saldo es: 50





// =======================================================
// OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// =======================================================

/*13. Declara dos variables numéricas.
    Muestra si son iguales (==) o diferentes (!=).
*/
// RESPUESTA AQUÍ 👇

let numA = 15;
let numB = 20;
console.log("¿numA es igual a numB? " + (numA == numB)); // ¿numA es igual a numB? false
console.log("¿numA es diferente de numB? " + (numA != numB)); // ¿numA es diferente de numB? true  

/*14. Declara edad = 17.
    Muestra si es mayor o igual a 18 (edad >= 18).
*/
// RESPUESTA AQUÍ 👇

let edad = 17;
console.log("¿Es mayor o igual a 18? " + (edad >= 18)); // ¿Es mayor o igual a 18? false


/*15. Declara dos variables a = 10, b = "10".
    Muestra el resultado de a == b y a === b para ver la diferencia.
*/
// RESPUESTA AQUÍ 👇

let varA = 10;
let varB = "10";
console.log("a == b: " + (varA == varB)); // a == b: true
console.log("a === b: " + (varA === varB)); // a === b: false 

/*16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.
*/
// RESPUESTA AQUÍ 👇

let c = 15;
let d = 20;
console.log("¿c es menor que d? " + (c < d)); // ¿c es menor que d? true
console.log("¿c es mayor o igual que d? " + (c >= d)); // ¿c es mayor o igual que d? false  


// =======================================================
// OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// =======================================================

/*17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir.
*/
// RESPUESTA AQUÍ 👇
let tieneLicencia = true;
let tieneAuto = false;
let puedeConducir = tieneLicencia && tieneAuto;
console.log("¿Puede conducir? " + puedeConducir); // ¿Puede conducir? false 


/*18. Declara esMayor = true y tieneEntrada = false.
    Usa || (OR) para verificar si puede entrar al cine.
*/
// RESPUESTA AQUÍ 👇

let esMayor = true;
let tieneEntrada = false;
let puedeEntrar = esMayor || tieneEntrada;
console.log("¿Puede entrar al cine? " + puedeEntrar); // ¿Puede entrar al cine? true    


/*19. Declara variable conectado = false.
    Usa ! (NOT) para mostrar el valor contrario.
*/
// RESPUESTA AQUÍ 👇
let conectado = false;
let estadoConectado = !conectado;
console.log("¿Está conectado? " + estadoConectado); // ¿Está conectado? true    



/*20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos para verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").
*/
// RESPUESTA AQUÍ 👇

let edadVotante = 25;
let nacionalidad = "boliviana";
let puedeVotar = (edadVotante >= 18) && (nacionalidad == "boliviana");
console.log("¿Puede votar? " + puedeVotar); // ¿Puede votar? true   



// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇





/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇

/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇

/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    */
// RESPUESTA AQUÍ 👇 */

let nombreEstudiante = "Alfredo";
let edadEstudiante = 42;
let nota1Estudiante = 85;
let nota2Estudiante = 90;
let nota3Estudiante = 78;  
let promedioEstudiante = (nota1Estudiante + nota2Estudiante + nota3Estudiante) / 3;
let esMayorDeEdadEstudiante = (edadEstudiante >= 18) ? "Sí, es mayor de edad." : "No, es menor de edad.";

console.log("Hola " + nombreEstudiante + ", tienes " + edadEstudiante + " años. " + esMayorDeEdadEstudiante + " Tu promedio es: " + promedioEstudiante); 
// Hola Alfredo, tienes 42 años. Sí, es mayor de edad. Tu promedio es: 84.33333333333333
/* 1. Declara dos variables a y b con valores numéricos.
    Muestra en consola su suma, resta, multiplicación y división.
*/


/*

Se tiene un ciber cafe se requiere un sistema donde quienes vayan a utilizar el servicio de cabina de juegos sean mayores de edad, siendo el tope hasta los 35 años. Si son
menores de 18 años no podrán utilizarlo. el consumo mínimo es de 10 dlls y cuando tenga menos de este saldo que aparezca un mensaje de que se debe hacer recarga para continuar jugando.
cada 5 dlls es una hora de juego, 2.5 dlls tiene media hora de juego. Es importante mencionar que solo es para hombres y no para mujeres.
Se requiere que aparezca un mensaje cuando está jugando donde se le informe el saldo con el que cuenta y el tiempo restante. 
15 dlls de saldo tiene 3hrs de juego una vez se da inicio al juego corre el saldo que tiene.*/

let edadUsuario = 20;
let saldoUsuario = 15; 
let esHombre = true;  
let tiempoJuego = 0; 

if (esHombre) {
    if (edadUsuario < 18) {
        console.log("No puedes utilizar el servicio de cabina de juegos. Debes ser mayor de edad.");
    } 
    else if (edadUsuario > 35) {
        console.log("No puedes utilizar el servicio de cabina de juegos. El tope de edad es 35 años.");
    } 
    else {
        if (saldoUsuario < 10) {
            console.log("Saldo insuficiente. Por favor, recarga para continuar jugando.");
        } 
        else {
            
            tiempoJuego = (saldoUsuario - (saldoUsuario % 5)) / 5;

            let saldoRestante = saldoUsuario % 5; 
            
            if (saldoRestante >= 2.5) {
                tiempoJuego += 0.5; 
            }

            console.log("Puedes jugar. Tu saldo es: " + saldoUsuario + " dlls. Tiempo de juego restante: " + tiempoJuego + " horas.");
        }
    }
} 
else {
    console.log("El servicio de cabina de juegos es solo para hombres.");
}
