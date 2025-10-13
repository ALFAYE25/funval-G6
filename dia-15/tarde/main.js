/* -------- FUNCION CONSULTAR SALDO Y DEPOSITAR-------*/

let saldo = 0;

function consultarSaldo() {
  console.log("Tu saldo actual es: $" + saldo);
}

function depositar() {
  console.log("=== DEPÓSITO DE DINERO ===");
  let montoTexto = prompt("Ingrese el monto a depositar:");
  let monto = Number(montoTexto);

  if (monto > 0) {
    saldo = saldo + monto;
    console.log("Depósito realizado correctamente.");
    console.log("Nuevo saldo: $" + saldo);
  } else {
    console.log("Monto inválido. Debe ingresar un número positivo.");
  }
}
