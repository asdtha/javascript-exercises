/*------------------------------------------- IF TERNARIO ----------------------------------*/
/* Ejercicios “Control de flujo”
Crear una función que ...
1. reciba un valor y nos retorne si ese valor es par o impar.
2. levante una barrera si el vehículo pagó el peaje.
3. reciba un número y retorne si es el mismo que eligió al azar la función
Math.random() entre 0 y 10.
4. al recibir una fecha indique si la misma es navidad o no.
5. al recibir un mes, con un switch, nos indique cuántos días tiene ese mes.
6. reciba un valor por parámetro e indique que el alumno recursa si tiene una nota
menor a 4, va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que
la nota sea igual o superior a 7.
7. que retorne si una nave espacial que está entrando a la atmósfera ya puede abrir su
paracaídas. La altura debe ser entre 2000 m. y 3000 m., y la velocidad debe ser
menor a 1000 km/h. */

/* 1 */
function esPar(num) {
    return num%2 == 0 ? "es par" : "es impar"; 
}
console.log(esPar(11));

/* 2 */
function levantarBarrera(x) {
    return x == "no" ? "No levante la barrera" : "levanta la barrera";
}
console.log(levantarBarrera("si"));

/* 3 */
function verificacion(num) {
    let num2 = Math.random(num);
    return num ==  num2 ? num + " es el mismo" : num2 + " no es el mismo";
} 
console.log(verificacion(3));

/* 4 */
function fecha (fech) {
    return fech == "25/12" ? "Es navidad" : "no es navidad";
 }
 console.log(fecha("24/12"));

/* 5 */
function recursar(nota) {
    return nota < 4 ? "recursa" : nota < 7 ? "va a recuperayotio" : "aprueba";
}
console.log(recursar(8));

/* 6 */
function puedeAbrirParacaidas(altura, velocidad){
    return altura > 2000 && altura < 3000 && (velocidad < 1000) ? "puede abrir su paracaidas" : "No puede abrir su paracaidas";
}
console.log(puedeAbrirParacaidas(2500, 500));