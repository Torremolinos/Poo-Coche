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
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`; //si quieres dibujar en html el local storage pues pones local.stogare...
}

//Para aplicar las clases debemos instanciarlas.

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

// Variable de tipo Objetc de un objeto vehiculo.

const vehiculoObject = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'rojo',
    fabricacion: 1992,
    cilindrada: '2400',
};

// Almacenar datos - Guardar el Json en el LocalStorage
localStorage.setItem('vehiculo', JSON.stringify(vehiculoObject)); //de tipo objeto a json

/*como mostrar por consola como se ve el objeto json*/
console.log(JSON.stringify(vehiculoObject));

/*recuperar datos -mostrar el object en consola del Json que hemos guardado en el LocalStorage*/
console.log(JSON.parse(localStorage.getItem('vehiculo'))); //de json a variable tipo objeto

// imprimimos por consola la variable objeto.
console.log(localStorage.getItem('vehiculo'));


// Muestra de un objeto furgoneta
const furgoneta1 = new Furgoneta('Mercedes', 'Kangoo', 'Azul', 2014, '1800', 8);
mostrarResultado('<br/> <br/> --------Furgoneta--------')
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(140);
furgoneta1.frenar();

//que metodos utilizamos para encapsular (Getter/Setter)
console.log(furgoneta1.marca);
//guardar unicamente la marca del coche
localStorage.setItem("marca furgoneta", furgoneta1.marca);

// Muestra un objeto todoterreno.
const todoterreno1 = new TodoTerreno('Suzuki', 'fullpower', 'negro', 2016, '3600', 'si');
mostrarResultado('<br/><br/>------TodoTerreno 1--------');
todoterreno1.mostrarDatos();
mostrarResultado('<br/>Traccion: ' + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();
//como aplicamos poliformismo, un vehiculo puede ser varias cosas, furgoneta todoterreno.

// Generar variable tipo Object con POO.
const todoterrenoObject = {
    marca: todoterreno1.marca,
    modelo: todoterreno1.modelo,
    color: todoterreno1.color,
    fabricacion: todoterreno1.fabricacion,
    cilindrada: todoterreno1.cilindrada,
    traccion: todoterreno1.traccion

}

//Almacenar los datos en el local.storage mediante un bucle iterativo
for (let key in todoterrenoObject) {
    //hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto.
    if (todoterrenoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, todoterrenoObject[key]);
    }
}

//Eliminar un elemento del local.storage 
localStorage.removeItem('color');
localStorage.removeItem('modelo');

//eliminar todos los elementos de un localStorage
// localStorage.clear(); //y lo elimina todo   esta comentado pa no borrarlo todo.