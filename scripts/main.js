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
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//Para aplicar las clases debemos instanciarlas.

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const furgoneta1 = new Furgoneta('Mercedes','Kangoo', 'Azul', 2014,'1800',8);
mostrarResultado('<br/> <br/> --------Furgoneta--------')
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(140);
furgoneta1.frenar();

//que metodos utilizamos para encapsular (Getter/Setter)
console.log(furgoneta1.marca);

// Muestra un objeto todoterreno.
const todoterreno1 = new TodoTerreno('Suzuki','fullpower','negro',2016,'3600','si');
mostrarResultado('<br/><br/>------TodoTerreno 1--------');
todoterreno1.mostrarDatos();
mostrarResultado('<br/>Traccion: ' + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();
//como aplicamos poliformismo, un vehiculo puede ser varias cosas, furgoneta todoterreno.