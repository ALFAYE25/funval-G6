/*--------- STRINGS CASO ESPECIAL --------*/

// let nombre = "KEVIN";
// for(let i=0;i<nombre.length;i++){
//     console.log(nombre[i]);
//     if(nombre[i]==="A" || nombre[i] ==="a") {
//         console.log("la vocal A esta preseneten este string");
//     } 
// }



/* -------- FUNCIONES -------*/
//no basta con solo declarar la funcion sino llamarla
function saludar() {
//todo el codigo que se ejecutara dentro de la caja magia
console.log("Hola amigos de funval");


}
//llamar funcion
saludar();

//funciones que reciben parametros pero no retornan nada
function saludarEstudiante(nombre, edad) {
console.log("hola amigo " + nombre + " de edad: " + edad);

}
//llamar funcion
saludarEstudiante("Boren", 33);
saludarEstudiante("Moises", 19);
saludarEstudiante("Kevin", 39);


//funciones que reciben parametros y retornan un valor

function sumarNumeros (a, b, c) {
    let resultado = 0;
    resultado = a + b + c;
    return resultado;
}

console.log(sumarNumeros (14, 30, 70));


//funcion que no recibe nada pero retorna un valor
function devolverSaludo(){
return "chao amigo";

} 
console.log(devolverSaludo());


/*--------------------*/

//crear una funcion que reciba un string y me retorne el mismo string sin espacios vacios


function quitarEspacios(texto) {
  let nuevoTexto = "";

  for (let caracter of texto) { 
    if (caracter !== " ") {   
      nuevoTexto += caracter;
    }
  }

  return nuevoTexto; 
}


console.log(quitarEspacios("Hola amigos de Funval"));
console.log(quitarEspacios(" practica de funciones"));
console.log(quitarEspacios("Aprendiendo JavaScript basico"));




function quitarEspacios(texto) {
  let nuevoTexto = "";

  for (let caracter of texto) { 
    if (caracter !== " ") {     
      nuevoTexto += caracter;
    }
  }

  return nuevoTexto; 
}


let textoUsuario = prompt("Ingresa un texto para quitar los espacios:");


let resultado = quitarEspacios(textoUsuario);
console.log("Texto sin espacios:", resultado);


