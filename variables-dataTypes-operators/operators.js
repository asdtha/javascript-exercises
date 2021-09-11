//Operadores aritméticos, operadores lógicos, de comparación y de concatenación.

//Suma
console.log(5 + 4);

//Resta
console.log(10-6);

//Multiplicación
console.log( 3 * 4 );

//División
console.log(10/2);

//Módulo: MUESTRA EL RESTO DE LA OPERACIÓN
console.log(10 % 2);

//Incremento: ++
let numero = 6;
console.log(++numero);

//Decremento: --
let otroNumero = 10;
console.log(--otroNumero);

//Comparación simple: solo debe coincidir valor
console.log( 5 == '5');

//Comparación estricta: debe coincidir valor y tipo de dato (en este caso string y number)
console.log( 5 === '5');

//Desigualdad simple
console.log( 5 != '5' ); 

//Desigualdad estricta: desigualdad tanto en el valor como en el tipo de dato
console.log( 5 !== '5' ); 

//Mayor que
console.log( 10 > 6); // true

//Mayor o igual que
console.log( 6 >= 6); // true

//Menor que
console.log( 7 < 7); // false

//Menor o igual que
console.log( 7 <= 7);

//****OPERADORES LÓGICOS****

//Operador AND: (&) La sentencia es verdadera solo si todos sus elementos son verdaderos
let dia = 'domingo'
let clima = 'soleado'
console.log( dia == 'domingo' && clima == 'soleado'); // true

/* Operador OR (||): basta con que una sea verdadera para que sea verdadero
/*Sirve para preguntar por varias sentencias a la vez pero a diferencia del AND con que solo una de las sentencias
se evalúe como verdadera, toda la sentencia completa dará verdadera. */

8>=15 //false  //  8 != 3 TRUE
8>=15 || 8 !=13 //true

//Operador de negación(!): Nos permite cambiar el valor a falso o verdadero dependiendo de cuál era el valor que existía anteriormente

//Operador de concatenación (+): Sirve para unir dos o más cadenas de texto en una sola.
let nombre = 'Josefina';
let apellido = 'Perez';
console.log ( nombre + ' ' + apellido );






























































