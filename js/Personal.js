export default class Personal {
  constructor(nom, t, s) {
    this.nombre = nom;
    this.tipo = t;
    this.sueldo = s;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set tipo(t) {
    this._tipo = t;
  }
  set sueldo(s) {
    this._sueldo = s;
  }
  get nombre() {
    return this._nombre;
  }
  get tipo() {
    return this._tipo;
  }
  get sueldo() {
    return this._sueldo;
  }
  calcSueldo() {
    if (this.tipo == "O") {
      return this.sueldo * 0.2 + this._sueldo;
    } else if (this.tipo == "A") {
      return this.sueldo * 0.1 + this._sueldo;
    }
  }
}
