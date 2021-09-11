/* Variables: es un espacio de memoria donde se almacena un dato que podemos reutilizar a futuro
Se crean variables con palabras reservadas, que no se usan en otro contexto: VAR, LET, CONST
La más usada es VAR que va acompañada del nombre que le queremos dar a esa variable.
Estándar del lenguaje: modo correcto de escribir código. Existen varios formatos de nomenclatura de variables: 
Camel Case (telefonoMadre), Snake Case (telefono_madre); Kebab Case (telefono-madre).
*/

/* "VAR"

Cuando usamos var, JavaScript ignora los bloques de código y convierte nuestra variable en global. 
Eso quiere decir que si hay otra variable "nombre" en nuestro código, seguramente estemos pisando su valor.
*/
var telefonoMadre = 1234567891; // El nombre de la variable solo puede estar formado por letras, números y los símbolos $ (pesos) y _ (guión bajo)- No pueden empezar con un número. No deberían contener ñ o caracteres con acentos
telefonoMadre = 1236547895; //Una vez que la variable ya fue declarada, le asignamos valores sin "var".
telefonoMadre = 7894561234; // El valor se pisa. Se puede redefinir su valor en cualquier momento, y seguramente se pise el valor anterior.
console.log(telefonoMadre);

var nombre = 'Josefa';
console.log(nombre);

/*  LET 

/* DIF ENTRE VAR Y LET: La principal dif entre VAR y LET es que LET solo sera accesible en el bloque de codigo en el que fue declarada, 
Los bloques son normalmente determinados por llaves {} */

//EJEMPLO:
// Con VAR
if (true) {
    var nombre = 'Juan'; 
} 
console.log(nombre);
//OK, muestra JUAN ----------Cuando usamos VAR, JS ignora los bloques de codigo y convierte nuestra variable en global.
//Eso quiere decir que si hay otra variable "nombre" en nuestro código, seguramente estemos pisando su valor.

//Con LET
if (true) {
    let nombre = 'Jose';
} 
console.log(nombre); //Error: nombre no existe. Cuando usamos LET, JS respeta los bloques de código. Eso quiere decir que "nombre" no podrá ser accedida fuera del if.
//También quiere decir que podemos tener variables con el mismo nombre en diferentes bloques de nuestro código.

/*Se diferencia de VAR en que LET pertenece exclusivamente a un bloque de ejecución. Un bloque de ejecución es todo aquel que se encuentra dentro de las llaves {}.
En el siguiente ejemplo, para JavaScript hay dos tipos de ejecución: el del primer IF y el del segundo IF. Por lo tanto, si una variable declarada con LET se encuentra 
dentro de este contexto podrán existir dos variables que se llamen igual y nunca se van a sobreescribir (PISAR), cosa que sí pasaría si usáramos VAR. */
// Bloque de ejecución 1
if (true) {
    let saludo = 'hola';
    console.log(saludo); //hola
}
//Bloque de ejecución 2
if (true) {
    let saludo = 'chau';
    console.log(saludo); //chau
}
/*Sin embargo, si tuviéramos una variable creada con LET y dentro del mismo bloque de ejecución definiéramos otra variable con el mismo nombre, 
nuestro código generaría un error, pues una variable declarada con LET no puede ser redefinida dentro del mismo bloque.
Bloque de ejecución 1
if (true) {
    let saludo = 'hola';
    let saludo = 'chau';
    console.log(saludo);
} */

//    EJEMPLO:
let numero_preferido = 3;
//let numero_preferido = 5; //daría error por estar dentro del mismo bloque
console.log(numero_preferido);
if (true) {
    let numero_preferido = 5; 
    console.log(numero_preferido);
} /*Estando dentro de bloques distintos podemos usar LET para definir variables con el mismo nombre. 
Si quisiera redefinir estas variables, solo tendría que cambiar el valor de las mismas, guardar el archivo, y volver a ejecutarlo */

/*  VARIABLE CONST (CONSTANTE): 

Se llama así dado que JS no nos permite cambiar su valor una vez que le asignemos uno. Tiene las mismas particularidades que LET, 
con la única diferencia que nunca vamos a poder cambiar su valor una vez que lo hayamos asignado.
Funcionan igual que las variables LET pues estarán disponibles solo en el bloque de codigo en el que se hayan declarado.*/

const EMAIL = 'mi.email@hotmail.com'; // Es una buena práctica nombrar las CONSTANTES con MAYÚSCULAS
//const EMAIL = 'mi.nuevoemail@hotmail.com'; //DA ERROR de asignación, no se puede cambiar el valor de una CONST
console.log(EMAIL);

const APELLIDO = 'Perez';
//const APELLIDO = 'torres'; //DA ERROR de asignación, no se puede cambiar el valor de una CONST
console.log(APELLIDO);
if (true){
const APELLIDO = 'Torres';
console.log(APELLIDO);
}

/*DECLARACIÓN CON LET O CONST: Tanto LET como CONST son accesibles dentro del bloque donde son declaradas.
Por esta razón solo podemos declararlas una vez. Si volvemos a declararlas, JS nos devolvera error.*/
//EJEMPLO:

/* let contador = 0;
let contador = 1;
// Error de re-declaracion de variable */

/* const email = 'mi.email@hotmail.com';
const email = 'mi.nuevo.email@hotmail.com';
//Error de re-declaración de la variable */

/*Las palabras reservadas como var, let y const solo puede ser usadas para el proposito que fueron creadas.
No pueden ser usadas como: nombre de variables, funciones, metodos o identificacion de objetos
*/