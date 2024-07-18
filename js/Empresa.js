export default class Empresa {
  constructor() {
    this.acumSueldo = 0;
  }
  procesarPersonal(per) {
    this.acumSueldo += per.calcSueldo();
  }
  devolverSueldoTotal() {
    return this.acumSueldo;
  }
}
