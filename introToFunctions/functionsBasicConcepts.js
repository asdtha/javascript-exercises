/*Una función es un bloque de código que nos permite agrupar una funcionalidad para usarla todas las veces que necesitemos. Normalmente realiza una tarea específica y retorna un valor como resultado*/
//El objetivo de las funciones es la reutilización de código: una vez definido el código se puede usar cuando se necesite. Se puede usar el mismo código muchas veces con argumentos diferentes para producir resultados distintos

//Sintaxis básica:
//Palabra reservada "function": Usamos la palabra function para indicarle a JS que vamos a escribir una función:
//Nombre de la función "sumar": Definimos un nombre para referirnos a nuestra función al momento de querer invocarla:
//Parámetros: Escribimos los paréntesis y, dentro de ellos, los parámetros de la función. Si hay más de uno, los separamos usando comas ,. Si la función no lleva parámetros, igual debemos escribir los paréntesis sin nada adentro (). Dentro de nuestra función podremos acceder a los parámetros como si fueran variables. Es decir, con solo escribir los nombres de los parámetros, podremos trabajar con ellos
//Cuerpo: Entre las llaves de apertura y de cierre escribimos la lógica de nuestra función, es decir, el código que queremos que se ejecute cada vez que la invoquemos.
//El retorno: Es muy común, a la hora de escribir una función, que queramos devolver al exterior el resultado del proceso que estamos ejecutando.
//Para eso utilizamos la palabra reservada "return" seguida de lo que queramos retornar:
function sumar (a, b) {
return a + b;
}
console.log(sumar(2, 4)); // 6

//***Funciones declaradas: Son aquellas que se declaran usando la estructura básica. Pueden recibir un "nombre", escrito a continuación de la palabra reservada function, a través del cual podremos invocarla.
function restar (numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(10,3)); // 7

//***Funciones expresadas: Son aquellas que se asignan como valor de una variable. En este caso, la función en sí no tiene nombre, es una función anónima. 
//Para invocarla podremos usar el nombre de la variable que declaremos.

let hacerSushi = function (cantidad) {
    return 'sushi'.repeat(cantidad);
}
console.log(hacerSushi(2)); 

let multiplicar = function(numeroA, numeroB){
    return numeroA * numeroB;
}
console.log(multiplicar(2, 9)); //18

let ejemplo = function() {
    saludo = "hola, soy una función expresada";
    return saludo;
}
console.log(ejemplo());

// INVOCACIÓN: Podemos imaginar las funciones como si fueran máquinas. Durante la declaración nos ocupamos de 
//construir la máquina y durante la invocación la ponemos a funcionar.

//Invocando una función: Antes de poder invocar una función, necesitamos que haya sido declarada. 
//Entonces, vamos a declarar una función:
function hacerHelado() {
return 'helado';
}
//La forma de invocar (también se puede decir llamar o ejecutar) una función es escribiendo su nombre seguido de apertura y cierre de paréntesis:
hacerHelado(); // Retornará 'helado' 
console.log(hacerHelado()); // Usamos console.log() para imprimir por pantalla el retorno de la función

//Si la función tiene parámetros, se los podemos pasar dentro de los paréntesis cuando la invocamos. Es importante respetar el orden ya que JavaScript asignará los valores en el orden en que lleguen.
function saludar(nombre, apellido) {
return 'Hola ' + nombre + ' ' + apellido;
}
saludar('Robertito', 'Rodríguez'); // retornará 'Hola Robertito Rodríguez'

//También es importante tener en cuenta que cuando tenemos parámetros en nuestra función JavaScript va a esperar que se los indiquemos al ejecutarla.
function saludar(nombre, apellido) {
return 'Hola ' + nombre + ' ' + apellido;
}
saludar(); // retorna 'Hola undefined undefined'
//En este caso, al no haber recibido el argumento que necesitaba, JavaScript le asigna el tipo de dato undefined a los parámetros nombre y apellido.

//Ejemplo de Scope

let mensaje = 'Hola'; // Scope global

function saludar() {
    let mensaje = 'Chau'; // Scope local
    return mensaje;
}
console.log(mensaje); // Imprime "Hola"
console.log(saludar()); // Retorna "Chau" y lo imprime por pantalla


