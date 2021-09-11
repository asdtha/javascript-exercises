/* TIPOS DE DATOS: Los tipos de datos le permiten a JavaScript conocer las características
y funcionalidades que estarán disponibles para ese dato*/

//TIPOS DE DATOS

//********Numéricos (number)

let edad = 35; // número entero
let precio = 150.65; // decimales

//********Cadenas de caracteres (string): Textos alfanumericos que pueden tener cualquier longitud-
//se usan con comillas dobles o simples

let nombre = 'Mamá Luchetti'; // comillas simples
let ocupacion = "Master of the sopas"; // comillas dobles tienen el mismo resultado

//*********Lógicos o booleanos (boolean): no se encierran dentro de las comillas
let laCharlaEstaReCopada = true;
let hayAsadoAlFinal = false;


// TIPOS DE DATOS ESPECIALES: Los tipos de datos especiales le permiten a JavaScript determinar estados especiales que pueden tener los datos.

//**********NaN (Not a Number): Dato NaN Not a Number: cuando un dato no es un numero en sí, pero tampoco es un texto ni un dato booleano.
//ej. una operacion matematica errada: multiplicar una letra por un nro.
//Indica que el valor no puede ser parseado como un número
let malaDivision = "35" / 2; // NaN no es un número

/* **********Null (valor nulo)
Lo asignamos nosotros para indicar un valor vacío o desconocido. */
let temperatura = null; // No llegó un dato, algo falló

//**********Undefined (valor sin definir): Indica la ausencia de valor. Las variables tienen un valor indefinido hasta que les asignamos uno.
let saludo; // undefined, no tiene valor
saludo = "¡Hola!"; // Ahora si tiene un valor


/**************TIPO DE DATO "OBJETO LITERAL": tiene una estructura más compleja que el resto. 
El valor puede ser de cualquier tipo de los que hemos visto, si queremos agregar más claves y valores, 
escribimos una coma al final de cada linea.
Con este tipo de datos estamos en la capacidad de crear un conjunto de mucha info que esté almacenada 
en la misma variable.
Ejemplo:
let objetoLiteral = {
    clave: valor,
    clave1: valor1
};
*/

let miComputadora = {
    marca: 'Macbook Pro',
    modelo: 2017,
    estaEncendida: true
};
console.log(miComputadora);

let persona = {
    nombre: "Josefa",
    apellido: "Perez",
    edad: 29,
    peso: 60,
    nacionalidad: "argentina",
    estadoCivil: "casada",
    estaCasada: true
}
console.log(persona);

/*************TIPO DE DATO: ARRAY (lista o arreglo): 
 * nos permite hacer algo similiar al OBJETOLITERAL, que nos permite almacenar/agrupar varios tipos de datos
  en una sola variable y se dif del mismo porque el array no tiene CLAVES sino indices numericos que 
  comienzan en CERO 0. Para poder crear un array basta con escribir Corchetes [] después del nombre de la variable, y separar los datos con una coma.
Al ser un array y no tener claves, los indices del array son la posicion en donde se almacena el dato en particular. Podriamos decir por ej. que Gattaca esta en el indice 0
mientras que Arrival esta en el indice 2 
*/
let pelisFavoritas = ["Gattaca", "Interstellar",
    "Arrival", "Inception"];
console.log(pelisFavoritas);

let paises = ["Argentina", "Venezuela", "Colombia" ];
console.log(paises);

//Los tipos de datos en JS son sumamente importantes. Con estos podemos crear varios tipos de datos, 
//según sea necesario. Existen para que podamos crear datos en función de lo que estamos programando









