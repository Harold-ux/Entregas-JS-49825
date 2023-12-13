const totalEntradas = 10;
const intentosMaximos = 5;
let intentos = 0;
let entradasUsadasJose = 0;
let entradasUsadasLuis = 0;

function verificarAcceso(anfitrion, invitado) {
  let invitadosAutorizados;

  switch (anfitrion.toLowerCase()) {
    case "jose":
      invitadosAutorizados = ["francisco", "numan", "juan", "carlos", "zuli"];
      return invitadosAutorizados.includes(invitado);
    case "luis":
      invitadosAutorizados = ["dubraska", "marisela", "alex", "cindy", "cecilia"];
      return invitadosAutorizados.includes(invitado);
    default:
      return false;
  }
}

function mostrarTotal(anfitrion, entradasUsadas) {
  alert(`Total de entradas usadas por ${anfitrion}: ${entradasUsadas}`);
}

while (intentos < intentosMaximos) {
  let invitado = prompt("Ingrese nombre de invitado").toLowerCase();
  let anfitrion = prompt("¿Quién es su anfitrión?");

  if (verificarAcceso(anfitrion, invitado)) {
    // cantidad de entradas usadas por el anfitrión
    if (anfitrion.toLowerCase() === "jose") {
      entradasUsadasJose++;
      mostrarTotal(anfitrion, entradasUsadasJose);
    } else if (anfitrion.toLowerCase() === "luis") {
      entradasUsadasLuis++;
      mostrarTotal(anfitrion, entradasUsadasLuis);
    }
    alert(`${invitado} tiene acceso autorizado por: ${anfitrion}`);
    break;
  } else {
    alert(`Verificación fallida. Intentos restantes: ${intentosMaximos - intentos - 1}`);
    intentos++;
  }
}
