// Lista de usuarios con sus listas de movimientos
const usuarios = [
  {
    nombre: "Carlos",
    movimientos: [50000, -20000, -15000, 100000]
  },
  {
    nombre: "Ana",
    movimientos: [-50000, -100000, -30000]
  },
  {
    nombre: "Luisa",
    movimientos: [200000, -45000, -12000, -80000]
  }
];

for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  
  
  let totalUsuario = 0;

  for (let j = 0; j < usuario.movimientos.length; j++) {
    totalUsuario += usuario.movimientos[j];
  }

  console.log(`Usuario: ${usuario.nombre} | Total en cuenta: $${totalUsuario}`);
}