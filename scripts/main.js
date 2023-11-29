//Importar las clases desde los archivos respectivos
import { Vehiculo } from "./vehiculo.js";
import { Furgoneta } from "./furgoneta.js";
import { TodoTerreno } from "./todoterreno.js";

// Crear un contenedor para mostrar los resultados
const resultadoContainer = document.createElement('div');//debemos coger al padre de div. que seria body
document.body.appendChild(resultadoContainer);

// Funcion para mostrar datos.
export function mostrarResultado(mensaje) {
    //aqui generamos un parrafo y por eos usamos innerHTML
    resultadoContainer.innerHTML = `<p>${mensaje}</p>`;
}

//Para aplicar las clases debemos instanciarlas.

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();
