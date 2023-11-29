import { Vehiculo } from './vehiculo';

class TodoTerreno extends Vehiculo {
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
}