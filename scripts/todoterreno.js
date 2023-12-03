import { Vehiculo } from './vehiculo.js';

export class TodoTerreno extends Vehiculo {
    #traccion;

    //sino podemos llamar al constructor por defecto aqui lo podemos llamar en el padre.
    constructor(marca, modelo, color, fabricacion, cilindrada, traccion) {
        super(marca, modelo, color, fabricacion, cilindrada, traccion);
        this.#traccion = traccion;
    }

    get traccion() {
        return this.#traccion;
    }

    set traccion(value) {
        this.#traccion = value;
    }
    mostrarDatos(){
        super.mostrarDatos();
        const datos = `La traccion es: ${this.#traccion}`;
        mostrarResultado(`<p>${datos}</p>`); //llamamos a la funcion mostrarResultado definida en el main.js
    }
}