/* 1) Crear la función calcularIndiceDeMasaCorporal que reciba la altura en metros y el peso en kilogramos y calcule el imc del usuario (peso / altura2).
Luego, ejecutar la función probando diferentes valores. */

function calcularIMC(alturaEnMetros, peso) {
    let imc = peso / (alturaEnMetros^2)
    return "Nicolas tiene un imc de " + imc.toFixed(2); // .toFixed para mostrar solo la cantidad de decimales que queremos
}
console.log(calcularIMC(1.7,80));

/* 2) Crear las 4 funciones expresadas (dentro de variables) básicas de una calculadora: Suma Resta Multiplicación División.
Las 4 funciones deberán recibir dos parámetros y retornar el resultado de la operación matemática correspondiente. */

let suma = function (num1,num2){
    return num1 + num2;
}
let resta = function (num1,num2){
    return num1 - num2;
}
let multiplicar = function (num1,num2){
    return num1 * num2;
}
let dividir = function (num1, num2) {
    return num1 / num2;
} 
console.log(suma(2,3), resta(3,3), multiplicar(5,5), dividir(10,2));

/* 
3) Crear las variables, nombreJugador, golesJugador, precioEnDolares. Después, crear la función hacerGol que incremente la cantidad de goles del jugador en uno e imprima por pantalla “GOL!!!!!!!!!”. 
Además, deberá incrementar el valor del jugador en 10.000 dólares. A continuación, pruebe ejecutar varias veces la función e imprimir por pantalla la nueva cantidad 
de goles del jugador y el precio del jugador en el mercado.*/

let nombreJugador = "Cristiano";
let golesJugador = 0;
let precioEnDolares= 0;

function hacerGol (){
golesJugador ++;
precioEnDolares += 10000;
console.log("GOOOOL")
console.log("El total de goles anotados por " + nombreJugador + " es de: " + golesJugador + ", ahora el precio del jugador en dólares es de: " + precioEnDolares)
}
hacerGol();
console.log("\n")
hacerGol();
console.log("\n")
hacerGol();
console.log("\n")
console.log("-------------")
console.log("-------------\n")

/* 4) Crear la función hattrick que simplemente en su interior ejecute tres veces la función hacerGol y 
aumente el valor del jugador en un 10% extra anual respecto al valor actual.  */

function hattrick(){
    hacerGol()
    hacerGol()
    hacerGol()
    precioEnDolares = precioEnDolares * 1.1;
    console.log("¡Hattrick!")
    console.log("Ahora el precio del jugador en dólares es de: " + Math.round(precioEnDolares)); // Math.round() para redondear
}
hattrick();
console.log("\n")
hattrick();
console.log("\n")

// EJERCITACION ADICIONAL:

function test1 (x, y){
    return y - x;
}
console.log(test1(40,10));

// 1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function convertirPulgadasACentimetros (pulgada) {
   pulgada * 2.54; 
}
 console.log("La caja mide " + convertirPulgadasACentimetros(50) + " cm");

 // 2. Crear una función que recibe un string y lo convierte en una URL. ej: “pepito” es devuelto como “http://www.pepito.com”

 function convertir (name) {
    name = "//www.pepito.com";
    return name;
 }
 console.log(convertir("PEPITO"));

 // 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function sayHi (cosa) {
    return cosa + "!";
}
console.log(sayHi("Hola"));
  
// 4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function calcularEdadPerro (edadPerro){ 
    const multiplicacion = 7;
    return edadPerro * multiplicacion;
}
console.log("El perro tiene " + calcularEdadPerro(5) + " años de edad equivalente en edad humano"); 

// 5. Crear una función que calcule el valor de tu hora, introduciendo tu sueldo mensual como parámetro.

function calcularValorHora (sueldoMensual){
    let horasTrabajadasPorMes = 160;
    let valorDeHora = 0;
    return valorDeHora = sueldoMensual / horasTrabajadasPorMes;
}
console.log("El valor de la hora es de " + calcularValorHora(220000));

// 6. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia

function calcularCircunferencia (radio) {
    return (radio * 2) * 3.14;
    }
console.log("La circunferencia de este círculo es " + calcularCircunferencia(4));

// 7. Crear una función que recibe un string y devuelve un booleano declarando TRUE si ese string está todo en MAYÚSCULAS. 
//tip: ver string.toUpperCase()

function str (mayusculas) {
  /*   var res = mayusculas.toUpperCase(); true */
    return mayusculas == mayusculas.toUpperCase(); // false
}
console.log(str("somos y no somos los mismos"));

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
//Ver typeof

function tipoDeDato(number, cosito) {
    return typeof (number != cosito); //boolean
}
console.log(tipoDeDato(12,12));


// 9. Crear una función que informe la fecha y la hora

function fechaYHora() {
    return "Hoy es " + Date();
}
console.log(fechaYHora());
console.log(fechaYHora());

