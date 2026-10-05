const prompt = require('prompt-sync')();

const pinCorrecto = 1234

let entrada = prompt("Ingresa un número: ");
let numero = Number(entrada);

while(pinCorrecto !== numero){
    console.log("Pin incorrecto intente nuevamente")
    entrada = prompt("!Incorrecto, Ingresa tu PIN de nuevo: ");
    numero = Number(entrada);
}

console.log("!Bienvenido!")