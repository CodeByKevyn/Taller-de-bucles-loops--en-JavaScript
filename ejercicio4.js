const prompt = require('prompt-sync')();

const movimientos = [
  { valor: 0, tipo: "transferencia_fallida" },
  { valor: 50000, tipo: "recarga" },
  { valor: 0, tipo: "ajuste" },
  { valor: -25000, tipo: "pago_comercio" },  
  { valor: -12000, tipo: "pago_comercio" },  
  { valor: -50000, tipo: "retiro" }
];

for (let i = 0; i < movimientos.length; i++) {
  
  if (movimientos[i].valor === 0) {
    console.log(`[Posición ${i}] Omitido: Movimiento de $0`);
    continue; 
  }

  
  if (movimientos[i].tipo === "pago_comercio") {
    console.log(`\n¡Éxito! El primer pago a comercio se encontró en la posición: ${i}`);
    console.log(`Detalles: $${movimientos[i].valor}`);
    break; 
  }

  console.log(`[Posición ${i}] Revisado: ${movimientos[i].tipo}`);
}