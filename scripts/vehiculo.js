class Vehiculo {
    #marca; //private ##.
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    constructor(marca, modelo, color, fabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }

    //constructor sin parametros
    constructor() { }

    mostrarDatos() {
        const datos = `La marca es ->${this.#marca}
        <br/>
        El modelo es -> ${this.#modelo}
        <br/>
        Su color es -> ${this.#color}
        <br/>
        Se fabricó el año -> ${this.#fabricacion}
        <br/>
        Cilindrada -> ${this.#cilindrada}`;
    }
}