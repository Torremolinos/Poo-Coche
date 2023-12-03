import { Vehiculo } from "./vehiculo.js";

export class Furgoneta extends Vehiculo {
  #pasajeros;

  constructor(marca, modelo, color, fabricacion, cilindrada, pasajeros) {
    super(marca, modelo, color, fabricacion, cilindrada);
    this.#pasajeros = pasajeros;
  }

  get pasajeros() {
    return this.#pasajeros;
  }
  set pasajeros(value) {
    this.#pasajeros = value;
  }
  mostrarDatos() {
    super.mostrarDatos();
    const datos = `La furgoneta tiene ${this.#pasajeros} pasajeros`;
    mostrarResultado(`<p>${datos}</p>`); //llamamos a la funcion mostrarResultado definida en el main.js
  }
}

// export default Furgoneta;
