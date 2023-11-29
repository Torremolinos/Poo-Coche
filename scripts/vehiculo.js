class Vehiculo {
    #marca; //private #.
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

        //llamar a la funcion mostrarREsultado definida en el main.js
        mostrarResultado(`<p>${datos}</p>`);
    }

    acelerar(velocidad) {
        const mensaje = `<br/> Se ha celerado hasta -> ${velocidad}`;
        mostrarResultado(`<p>${datos}</p>`);
    }
    //aqui llamamos a los atributos con el operador this. porque es private.
    arrancar() {
        const mensaje = `<br/> El coche${this.#marca}, ${this.#modelo}, de color ${this.color} ha arrancado.`;
        mostrarResultado(`<p>${datos}</p>`);
    }

    frenar(){
        const mensaje = `<br/> El coche${this.#marca}, ${this.#modelo}, de color ${this.color} ha parado.`;
        mostrarResultado(`<p>${datos}</p>`);
    }

    get marca(){
        return this.#marca;
    }
    
    set marca(value){
        this.#marca = value;
    }

    get modelo(){
        return this.#modelo;
    }
 
    set modelo(modelo){
        this.#modelo = modelo;
   
    }
 
    get color(){
        return this.#color;
    }
 
    set color(color){
        this.#color = color;
   
    }
 
    get fabricacion(){
        return this.#fabricacion;
    }
 
    set fabricacion(fabricacion){
        this.#fabricacion = fabricacion;
    }
 
    get cilindrada() {
        return this.#cilindrada;
    }
 
    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }
}