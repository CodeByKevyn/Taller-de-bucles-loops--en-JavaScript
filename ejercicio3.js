const prompt = require('prompt-sync')();

let opcion;

do {
    console.log("\n--- MENÚ NEQUI ---");
    console.log("1) Ver saldo");
    console.log("2) Enviar dinero");
    console.log("3) Recargar");
    console.log("4) Salir");

    opcion = prompt("Selecciona una opción (1-4): ");

    if (opcion === "1") {
    console.log("\n Tu saldo disponible es: $818,000");
  } else if (opcion === "2") {
    console.log("\n Has seleccionado la opción: Enviar dinero.");
  } else if (opcion === "3") {
    console.log("\n Has seleccionado la opción: Recargar.");
  } else if (opcion === "4") {
    console.log("\n Saliendo de Nequi... ¡Hasta pronto!");
  } else {
    console.log("\n Opción no válida. Por favor elige un número del 1 al 4.");
  }
} while (opcion !== "4");

