let operador1 = Number(prompt("Introduce el numero 1"));
let operador2 = Number(prompt("Introduce el numero 2"));

operacionSuma(operador1, operador2);

function operacionSuma(param1, param2 = 0) {
  if (arguments.length < 2 || arguments.length > 2) {
    alert("Erro hay mas o menos argumentos de los necesarios ");
    for (let index = 0; index < arguments.length; index++) {
      const element = arguments[index];
      console.log(element);
    }
  } else {
    if (!isNaN(param1) && !isNaN(param2)) {
      alert(
        `Los operadores son  ${param1} y ${param2},  la suma es ${
          param1 + param2
        }`
      );
    } else {
      alert("Alguno de los datos es incorrecto");
    }
  }
}
