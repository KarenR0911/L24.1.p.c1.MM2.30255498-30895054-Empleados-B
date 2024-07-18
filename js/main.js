/*En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por 
empleado y por la empresa) que deberá pagar en la próxima nómina. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana 
(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos 
(administrativo) gana $150 */

import Personal from "./Personal.js";
import Empresa from "./Empresa.js";

let per1 = new Personal("Juan", "O", 100);
let per2 = new Personal("Ana", "O", 120);
let per3 = new Personal("Lin", "A", 200);
let per4 = new Personal("Mary", "O", 50);
let per5 = new Personal("Carlos", "A", 150);
let empresa = new Empresa();

empresa.procesarPersonal(per1);
empresa.procesarPersonal(per2);
empresa.procesarPersonal(per3);
empresa.procesarPersonal(per4);
empresa.procesarPersonal(per5);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados: <br>`;
salida.innerHTML += `${
  per1._nombre
} tendrá un sueldo de: $${per1.calcSueldo()}`;
salida.innerHTML += `<br>${
  per2._nombre
} tendrá un sueldo de: $${per2.calcSueldo()}`;
salida.innerHTML += `<br>${
  per3._nombre
} tendrá un sueldo de: $${per3.calcSueldo()}`;
salida.innerHTML += `<br>${
  per4._nombre
} tendrá un sueldo de: $${per4.calcSueldo()}`;
salida.innerHTML += `<br>${
  per5._nombre
} tendrá un sueldo de: $${per5.calcSueldo()}`;
salida.innerHTML += `<br><br>El total a pagar de la empresa es: $${empresa.devolverSueldoTotal()}`;
