/*----------- CREACION Y DECLARACION DE OBJETOS----------*/

// let estudianteObj = {
//     nombre: "kevin",
//     edad: 28,
//     matricula: 1701212,
//     pais: "Bolivia",
//     altura: 1.6,
//     varon: true,
// };
// /*---------------ACCEDER A VALORES DE UN OBJETO-----------*/
// // console.log(estudianteObj);
// /*----------------AGREGAR O QUITAR PARES DE LLAVE VALOR---------*/
// estudianteObj.edad=18;  //modifica un valor existente
// estudianteObj.numeroDeCel=+525580904060; //creacion de un par llave valor
// delete estudianteObj.altura; // eliminar un par de llave valor existente
// console.log(estudianteObj);

// let laptopObj = {
//     modelo: "notebook g240",
//     marca: "hp",
//     color: "gris",
//     procesador: "corei7",
//     almacenamiento: "450 gb",
//     RAM: "16gb",
//     linea: {
//         submarca: "linea",
//         año: 2023,

//     },
// };

// laptopObj.color="negro";
// laptopObj.pantalla= 24;
// delete laptopObj.color
// console.log(laptopObj);

// /*---------------------------------*/
// console.log(laptopObj.linea.submarca);

/* 
    extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/

let estudianteObj = {
  nombre: "Kevin",
  edad: 28,
  matricula: 1701212,
  pais: "Bolivia",
  altura: 1.6,
  varon: true,
  empresa: {
    nombre: "Funval",
    añoFunvadion: 2005,
  },
  notas: [45, 78, 0, 32, 25, 34],
};

let suma = 0;
for (let i = 0; i <estudianteObj.notas.length; i++) {
suma = suma + estudianteObj.notas[i];

}

let promedio = suma / estudianteObj.notas.length;
promedio = promedio.toFixed(2);

if (promedio >= 60) {
    console.log( "El estudiante" + estudianteObj.nombre + "de la empresa" + estudianteObj.empresa.nombre + "tiene un promedio de " + promedio + ", por lo tanto está APROBADO."

    );
}else {

    console.log("El estudiante " + estudianteObj.nombre + "del país " + "tiene un promedio de " + promedio + ", por lo tanto está REPROBADO."

    );
}