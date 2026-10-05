const movimientos = [3000, 40000,-55000, -200000, 1000000, 30000]

let total = 0;
let cantidadRetiros = 0;

for(let i = 0; i < movimientos.length; i++){
    total += movimientos[i]
    if(movimientos[i] < 0){
        cantidadRetiros++
    }
}

console.log(`Su total es: ${total}, y la cantidad de retiros es: ${cantidadRetiros}`)