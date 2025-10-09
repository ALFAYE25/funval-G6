// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma = suma + i;
}
console.log("La suma total del 1 al 100 es: " + suma);

/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇
let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}
console.log("El factorial de " + numero + " es: " + factorial);

/*
9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 10; i++) {
  console.log(i + " al cuadrado es " + (i * i));
}

/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 50; i++) {
  if (i % 10 === 0) {
    console.log(i + " → Múltiplo de 10");
  } else {
    console.log(i);
  }
}

/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
let sumaPares = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sumaPares = sumaPares + i;
  }
}

console.log("La suma de los números pares del 1 al 50 es: " + sumaPares);

/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
let sumaImpares = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    sumaImpares = sumaImpares + i;
  }
}

console.log("La suma de los números impares del 1 al 50 es: " + sumaImpares);

/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }
}

/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i + " es múltiplo de 3");
  } else {
    console.log(i);
  }
}

/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇
for (let i = 20; i >= 0; i--) {
  console.log(i);
}

// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
let n = 2;
while (n <= 20) {
  console.log(n);
  n = n + 2;
}

/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇
let x = 10;
while (x >= 1) {
  console.log(x);
  x--;
}

/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇
let m = 1;
while (m <= 30) {
  if (m % 5 === 0) {
    console.log(m);
  }
  m++;
}


/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
let contador = 1;
let sumaTotal = 0;

while (contador <= 20) {
  sumaTotal = sumaTotal + contador;
  contador++;
}
console.log("La suma del 1 al 20 es: " + sumaTotal);


/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇
let u = 1;

while (u <= 15) {
  if (u % 2 === 0) {
    console.log(u + " es par");
  } else {
    console.log(u + " es impar");
  }
  u++;
}

/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇
let t1 = 1;

while (t1 <= 10) {
  console.log("7 x " + t1 + " = " + (7 * t1));
  t1++;
}

/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇
let c1 = 1;

while (c1 <= 40) {
  if (c1 % 4 === 0) {
    console.log(c1);
  }
  c1++;
}

/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇
let num = parseInt(prompt("Ingresa un número para calcular su factorial:"));
let fact = 1;
let j = 1;

while (j <= num) {
  fact = fact * j;
  j++;
}
console.log("El factorial de " + num + " es: " + fact);


/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇
let k1 = 15;

while (k1 >= 0) {
  console.log(k1);
  k1--;
}

// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);



/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇
let numeroTabla = parseInt(prompt("Ingresa un número para ver su tabla:"));
let b = 1;

do {
  console.log(numeroTabla + " x " + b + " = " + (numeroTabla * b));
  b++;
} while (b <= 10);

/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇
let z = 10;

do {
  console.log(z);
  z--;
} while (z >= 1);

/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇
let y = 1;

do {
  if (y % 6 === 0) {
    console.log(y + " es múltiplo de 6");
  } else {
    console.log(y);
  }
  y++;
} while (y <= 30);

/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇
let s = 1;
let suma50 = 0;

do {
  suma50 = suma50 + s;
  s++;
} while (s <= 50);

console.log("La suma del 1 al 50 es: " + suma50);


console.log("La suma del 1 al 50 es: " + suma50);

// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇
let n3 = parseInt(prompt("Introduce un número (positivo):"), 10);

if (n3 > 0) {
  for (let i = 1; i <= n3; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
} else {
  console.log("Número inválido.");
}

/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇
let numFac = parseInt(prompt("Ingresa un número para su factorial:"));
let resFac = 1;

for (let i = 1; i <= numFac; i++) {
  resFac = resFac * i;
}
console.log("El factorial de " + numFac + " es: " + resFac);

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇
let usuario = prompt("Ingresa tu nombre de usuario:");
let contraseña = prompt("Ingresa tu contraseña:");

if ((usuario === "Kevin" || usuario === "Belen") && contraseña === "1234") {
  console.log("Acceso autorizado");
} else {
  console.log("Acceso denegado");
}


/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇
let limite = parseInt(prompt("Ingresa un número:"));
let contadorPares = 0;

for (let i = 1; i <= limite; i++) {
  if (i % 2 === 0) {
    console.log(i);
    contadorPares++;
  }
}

console.log("Total de números pares encontrados: " + contadorPares);

/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇
let sumaMultiplos = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumaMultiplos = sumaMultiplos + i;
  }
}

console.log("La suma de múltiplos de 3 o 5 entre 1 y 100 es: " + sumaMultiplos);

/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇
let numPrimo = parseInt(prompt("Ingresa un número:"));
let esPrimo = true;

if (numPrimo <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i < numPrimo; i++) {
    if (numPrimo % i === 0) {
      esPrimo = false;
    }
  }
}

if (esPrimo) {
  console.log(numPrimo + " es primo");
} else {
  console.log(numPrimo + " no es primo");
}

/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇
let intentos = 3;

while (intentos > 0) {
  let user = prompt("Usuario:");
  let pass = prompt("Contraseña:");

  if (user === "admin" && pass === "1234") {
    console.log("Acceso autorizado");
    break;
  } else {
    intentos--;
    console.log("Datos incorrectos. Intentos restantes: " + intentos);
  }
}

if (intentos === 0) {
  console.log("Acceso bloqueado");
}

/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇
let sumaNum = 0;
let cantidad = 5;

for (let i = 1; i <= cantidad; i++) {
  let num = parseFloat(prompt("Ingresa el número " + i + ":"));
  sumaNum = sumaNum + num;
}

let promedio = sumaNum / cantidad;

console.log("La suma es: " + sumaNum);
console.log("El promedio es: " + promedio);


/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇
for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
// RESPUESTA AQUÍ 👇
/*

*/


let numeroSecreto = 7;
let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));
let intentos1 = 1;

while (intento !== numeroSecreto) {
  if (intento < numeroSecreto) {
    intento = parseInt(prompt("El número secreto es mayor. Intenta otra vez:"));
  } else if (intento > numeroSecreto) {
    intento = parseInt(prompt("El número secreto es menor. Intenta otra vez:"));
  }
  intentos1++;
}

console.log("¡Felicidades! Adivinaste el número en " + intentos1 + " intento(s).");
