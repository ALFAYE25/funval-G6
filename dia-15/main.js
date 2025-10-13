/*--------- CONCEPTOS BASICOS -------- */
// STRING, NUMBER, BOOLEAN, undefined, null, bigint, symbol
// i++ i+8  c*=8 c--
//Los operadores de asignación en JavaScript sirven para asignar valores a variables. 
// El operador básico es el signo igual ( = ), mientras que los operadores compuestos realizan una operación y luego asignan el resultado a la variable. 
// Los más comunes son += (suma y asigna), -= (resta y asigna), \*= (multiplica y asigna), /\= (divide y asigna), %= (módulo y asigna), y \*\*= (exponenciación y asigna).
// Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos. 
// Devuelve True cuando Expresión1 y Expresión2 son verdaderas. Devuelve True cuando Expresión1 o Expresión2 es verdadera.
// and && || or !not 
// and V cuando los 2 elementos que estan conectados son V todos los demas son F
// or  F cuando los 2 elementos que estan conectados son F todos los demas es V
// not invierte el valor booleano de un elemento si es V se convierte en F y viceversa.

// operadores de comparacion
// Mayor que: (>)
// Menor que: (<)
// Mayor o igual que: (>=)
// Menor o igual que: (<=)

// ==
// Igual (igualdad de valor, con coerción de tipos)
// ===
// Igualdad estricta (igualdad de valor y tipo)
// !=
// No igual (desigualdad de valor, con coerción de tipos)
// !==
// Desigualdad estricta (desigualdad de valor o tipo)
// >
// Mayor que
// <
// Menor que
// >=
// Mayor o igual que
// <=
// Menor o igual que

/* ---------- CONDICIONALES -----------*/
/* CONDICION
?VERDADERO
SENTENCIA1
SENTENCIA2
:FALSO

IF  SI ES VERDAD SUCEDE ALGO POR QUE NO EVALUA NADA SI ES FALSO
   IF-ELSE  EVALUA TANTO SI ES VERDADER O SI ES FALSA
   IF-ELSE-IF 

IF(CONDICION){
CONDICION ES V
}ELSE IF (CONDICION){
CONDICION 2 ES V

}

IF(CONDICION){
CONDICION ES V
}ELSE{                      MULTIPLES OPCIONES REEMPLAZABLE CON UN SWITCH CASE
IF(CONDICION){
CONDICION 2 ES V
{

IF(CONDICION){
CONDICION ES V
}ELSE{
    CODIGO SI LA CONDICION 1 ES FALSA Y AUN NO SE EVALUA LA CONDICION 2
    IF(CONDICION){
    CONDICION2 ES V
}
    
   */


/* -------------------------Sintaxis WHILE ------------------------- */
/* 
while(CONDICION){
codigo que estara dentro del bucle
}
*/

// let n = "";
// while (n !== "chau"){
// n = prompt("saludaa nuestro hermano jaime");
// console.log(n);

// }

/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
// let sumaTotal = 0;

// for (let contador = 1; contador <= 20; contador++) {
// sumaTotal= sumaTotal + contador;

// }
// console.log("La suma del 1 al 20 es: " +sumaTotal);


/*---------- SINTAXIS DE DO-WHILE -----------*/

/*

    do{
        
         codigo que estara dentro del bucle pero ingresara al menos 1 vez
         while(CONDICION)
}  
         */


        //  let username, passwd;
        //  let c = 0;

        //  do{
        //     c++;
        //     if (c >= 2) {
        //         alert("datos incorrectos, por favor intenta de nuevo");
        //     }
        //     alert ("INGRESA TUS DATOS");
        //     username=prompt("ingresa tu nombre de usuario");
        //     passwd = prompt("ingresa tu contraseña");
        //    } while(username!== "ADMIN" || passwd != 123456);
        //    alert ("ACCESO CORRECTO, BIENVENIDO");



/*------------- FOR -------------*/

/*

for(let c=0, c<=10;c++){
codigo que se ejecutara dentro de nuestro bucle

}
*/

// let n = 5;
// let cant =parseInt(
//     prompt("ingresa la cantidad de elementos que te gustaria de la serie del 5")
//     );

//     for (let i = 1; i <= cant; i++) {
//         console.log (n);
//         n +=5;
//     }


// 37. Simula un inicio de sesión:
//    Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
//    Si falla los 3 intentos, muestra "Acceso bloqueado".

// // RESPUESTA AQUÍ 👇

// let usuario, contraseña;
// let superContador = 0;

// do {

//     usuario = prompt("ingresa tu usuario");
//     contraseña = prompt("ingresa tu contraseña");
//     superContador++;
    
// } while (usuario !== "admin" || contraseña != 1234);

// if (superContador >3) {
// alert("ACCESO BLOQUEADO");

// } else {
//     alert("Bienvenido al sistema");
// }    ("Bienvenido al SISTEMA");


/*---------- FUNCIONES -----------*/

// function nombreDelaFuncion () {
//     //todo el cotido que se va a ejecutar
//     console.log("funcion normal");
// }
// // FUNCIONES ANONIMAS
// const funionAnonima = function () {
//     // todo el codigo que se va a ejecutar
//     console.log("funcion anonima");
// };

// // FUNCIONES FLECHA (ARROW FUNCTION)

// const funcionFlecha = (a) => console.log("funcion flecha");

// nombreDelaFuncion();
